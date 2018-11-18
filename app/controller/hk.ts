import { Controller } from "egg";
import { Post } from '../share_platform/framework/util/router/mapping';
import { MemberType } from '../share_platform/hk/enum/MemberType.enum';
import _ = require('lodash');
import { conn } from '../typeorm';
import { success } from '../share_platform/framework/util/res/success';
import { Member } from '../share_platform/hk/entity/Member';
import { Product } from '../share_platform/hk/entity/Product';
import { User } from '../share_platform/framework/entity/rbac/User';
import { Role } from '../share_platform/framework/entity/rbac/Role';
import { Menu } from '../share_platform/framework/entity/rbac/Menu';
import { err } from '../share_platform/framework/util/res/err';
import { AuditStatusEnum } from '../share_platform/hk/enum/AuditStatus.enum';
import { Airport } from '../share_platform/hk/entity/Airport';
import { ProductUnion } from '../share_platform/hk/entity/ProductUnion';
import { City } from '../share_platform/hk/entity/City';
import { error } from 'util';


export default class extends Controller {
    @Post('/dev/sync')
    async menuSync() {
        let databases: { database: string, tables: { objectCode: string, dataItems: any[] }[] }[] = this.ctx.request.body;
        let hk = databases.find(db => db.database == 'hk');
        if (hk) {
            hk.tables.forEach(hk => {
                let entity = this.service.framework.stq.getEntity(hk.objectCode);
                hk.dataItems.forEach(dataItem => { conn.getRepository(entity).save(dataItem) })
            });
        }
        this.ctx.body = success({})
    }
    @Post('/api/member/create')
    async  memberCreate() {
        let member: Member = this.ctx.request.body;
        let mobile = member.mobile;
        let exsitMember = await conn.getRepository(Member).findOne({ where: { mobile } });
        let user = new User();
        user.userName = member.mobile;
        user.name = member.name;
        user.orgId = member.orgId as number;
        user.password = member.password as string;
        if (!exsitMember) {
            let no = await this.service.framework.util.getNo(member.memberType + '');
            switch (member.memberType) {
                case MemberType.AGENT:
                    member.code = 'A' + _.padStart(no + '', 8, "0");
                    user.roleIds = '103';
                    break;
                case MemberType.CONSUMER:
                    member.code = 'C' + _.padStart(no + '', 8, "0");
                    user.roleIds = '104';

                    break;
                case MemberType.SUPPLIER:
                    member.code = 'S' + _.padStart(no + '', 8, "0");
                    user.roleIds = '102';
                    break;
            }
            user = await conn.getRepository(User).save(user);
            member.user = user;
            let insert = await conn.getRepository(Member).save(member);
            this.ctx.body = success({ insert });

        } else {
            this.ctx.body = err(400, "手机号已经被占用");
        }
    }

    @Post('/api/product/create')
    async  productCreate() {
        /**产品代码(出发地+到达地+航司2字代码+4位流水号 例:WUHBKKCZ0001)*/
        let product: Product = this.ctx.request.body;

        let startAirport = await conn.getRepository(Airport).findOne({ code: product.boundFlight.startAirportCode });
        let endAirport = await conn.getRepository(Airport).findOne({ code: product.boundFlight.startAirportCode });
        if (startAirport && endAirport) {

            let no = startAirport.cityCode + endAirport.cityCode + product.boundFlight.airCompanyCode;
            let code = await this.service.framework.util.getNo('order');
            product.code = no + _.padStart(code + '', 4, "0");
            product = await conn.getRepository(Product).save(product);
            product.boundFlight;
            let defaultProductUnion = new ProductUnion();
            let startCity = await conn.getRepository(City).findOne({ code: product.boundFlight.startCityCode });
            if (startCity) {
                defaultProductUnion.cityCode = startCity.code;
                defaultProductUnion.cityName = startCity.name;
                defaultProductUnion.cityPinyin = startCity.pinyin;
                defaultProductUnion.productId = product.id;
                defaultProductUnion.unionPrice = 0;
                conn.getRepository(ProductUnion).save(defaultProductUnion);
            } else {
                this.ctx.body = error(400, '找不到出发的城市');
            }


            this.ctx.body = success(product);
        } else {
            this.ctx.body = err(400, '未知的航班')
        }

    }
    @Post('/hk/user/login')
    async login() {
        let { userName, password } = this.ctx.request.body;
        let user = await conn.getRepository(User).findOne({ userName });
        let member = await conn.getRepository(Member).findOne({ where: { mobile: userName } });
        if (user) {
            let roles: Role[] = [];
            if (user.roleIds) {
                roles = await conn.getRepository(Role).findByIds(user.roleIds.split(','));
            } else {
                roles = [];
            }
            let menus: Menu[] = [];
            let menuIds: number[] = [];
            if (member || [1, 2, 3, 4].includes(user.id)) {
                if (member && (member as Member).memberStatus == AuditStatusEnum.approved || [1, 2, 3, 4].includes(user.id)) {
                    roles.forEach(role => menuIds.push(...role.menuIds.split(',').filter(id => id).map(id => parseInt(id))))
                    menuIds = _.uniq(menuIds);
                    menus = await conn.getRepository(Menu).findByIds(menuIds);
                }
                user.password == password ?
                    this.ctx.body = success({ employee: user, menus, member, token: this.service.framework.jwt.sign({ id: user.id, menuIds }) }, '登陆成功') : this.ctx.body = err(400, '密码错误');
            } else {
                this.ctx.body = err(400, '用户尚未审核')
            }
        } else {
            this.ctx.body = err(400, '用户尚未注册');
        }

    }
    @Post("/api/supplier/signup")
    async supplierSignup() {
        let member: Member = this.ctx.request.body;
        let mobile = member.mobile;
        let exsitMember = await conn.getRepository(Member).findOne({ where: { mobile } });
        let user = new User();
        user.userName = member.mobile;
        user.name = member.name;
        user.orgId = member.orgId as number;
        user.password = member.password as string;
        if (!exsitMember) {
            let no = await this.service.framework.util.getNo(member.memberType + '');
            switch (member.memberType) {
                case MemberType.AGENT:
                    member.code = 'A' + _.padStart(no + '', 8, "0");
                    user.roleIds = '103';
                    break;
                case MemberType.CONSUMER:
                    member.code = 'C' + _.padStart(no + '', 8, "0");
                    user.roleIds = '104';

                    break;
                case MemberType.SUPPLIER:
                    member.code = 'S' + _.padStart(no + '', 8, "0");
                    user.roleIds = '102';
                    break;
            }
            user = await conn.getRepository(User).save(user);
            member.user = user;
            let insert = await conn.getRepository(Member).save(member);
            this.ctx.body = success({ insert });

        } else {
            this.ctx.body = err(400, "手机号已经被占用");
        }
    }
}