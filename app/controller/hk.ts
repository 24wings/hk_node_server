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
import { Org } from '../share_platform/framework/entity/rbac/Org';
import { Order } from '../share_platform/hk/entity/Order';
import { OrderStatusEnum } from '../share_platform/hk/enum/OrderStatus.enum';
import { OrderRefound } from '../share_platform/hk/entity/OrderRefound';
enum ActionEnum {
    orderConfirm = 'order-confirm',
    depositPaid = 'deposit-paid',
    fullAmount = 'full-amount',
    outTicket = "out-ticket",
    orderCancel = 'order-cancel',


}

export default class extends Controller {
    @Post('/api/order/refound-request')
    async  orderRequest() {
        let { order, refound } = this.ctx.request.body;

        if (order && refound) {
            let dbOrder = await conn.getRepository(Order).findOne(order.id);
            if (dbOrder) {
                let newOrderRefound = new OrderRefound();

                newOrderRefound.refundNo = '' + await this.service.framework.util.getNo('order-refound');
                newOrderRefound.amount = dbOrder.amount;
                newOrderRefound.boundDate = dbOrder.boundDate;
                newOrderRefound.boundFlightCode = dbOrder.boundFlightCode;
                newOrderRefound.orderId = dbOrder.id;
                newOrderRefound.orderNo = dbOrder.orderNo;
                newOrderRefound.price_a = dbOrder.price_a;
                newOrderRefound.price_c = dbOrder.price_c;
                newOrderRefound.productCode = dbOrder.productCode;
                // newOrderRefound.productId=dbOrder.productCode;
                newOrderRefound.returnDate = dbOrder.returnDate;
                newOrderRefound.refundcount_a = refound.refundcount_a;
                newOrderRefound.refundcount_c = refound.refundcount_c;
                // newOrderRefound.supplier_amt = refound.supplier_amt;
                newOrderRefound.remark = refound.remark;
                newOrderRefound.refund_amt = refound.refund_amt;

                newOrderRefound.returnFlightCode = dbOrder.returnFlightCode;
                newOrderRefound = await conn.getRepository(OrderRefound).save(newOrderRefound);
                this.ctx.body = success(newOrderRefound);

            } else {
                this.ctx.body = err(400, '找不到订单');
            }
        } else {
            this.ctx.body = err(400, '未找到订单或退款信息');
        }
    }


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
    @Post('/api/product/query')
    async productQuery() {
        let query: { fromDate, toDate, fromCity, toCity } = this.ctx.request.body;
        let res = await conn.query(`SELECT * FROM org_test.v_product_qry 
        where boundDates like ? 
        and returnDates like ?
        and unionCityId = ?
        and stopCityId = ?
        
        `, [
                '%' + query.fromDate + '%',
                '%' + query.toDate + '%',
                query.fromCity,
                query.toCity
            ]);
        let products = await conn.getRepository(Product).findByIds(res.map(item => item.id));
        this.ctx.body = success({ query, paging: { rows: products, count: products.length } });
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
                } else {
                    return this.ctx.body = err(400, '用户尚未通过认证')
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
        user.roleIds = '102';
        if (!exsitMember) {
            let no = await this.service.framework.util.getNo(member.memberType + '');
            if (member.memberType == MemberType.AGENT || member.memberType == "AGENT" as any) {
                member.code = 'A' + _.padStart(no + '', 8, "0");
                user.roleIds = '103';
            } else if (member.memberType == MemberType.CONSUMER || member.memberType == "CONSUMER" as any) {
                member.code = 'C' + _.padStart(no + '', 8, "0");
                user.roleIds = '104';
            } else if (member.memberType == MemberType.SUPPLIER || member.memberType == "SUPPLIER" as any) {
                member.code = 'S' + _.padStart(no + '', 8, "0");
                user.roleIds = '102';
            } else {
                return this.ctx.body = err(400, '未知的会员类型')
            }
            user = await conn.getRepository(User).save(user);
            member.user = user;
            let insert = await conn.getRepository(Member).save(member);
            this.ctx.body = success({ insert });

        } else {
            this.ctx.body = err(400, "手机号已经被占用");
        }
    }
    @Post("/api/aggent/signup")
    async aggentSignup() {
        let member: Member = this.ctx.request.body;
        let mobile = member.mobile;
        let exsitMember = await conn.getRepository(Member).findOne({ where: { mobile } });
        let user = new User();
        user.userName = member.mobile;
        user.name = member.name;
        user.orgId = member.orgId as number;
        user.password = member.password as string;
        user.roleIds = '104';
        if (!exsitMember) {
            let no = await this.service.framework.util.getNo(member.memberType + '');
            switch (member.memberType) {
                case MemberType.AGENT || "AGENT":
                    member.code = 'A' + _.padStart(no + '', 8, "0");
                    user.roleIds = '103';
                    break;
                case MemberType.CONSUMER || "CONSUMER":
                    member.code = 'C' + _.padStart(no + '', 8, "0");
                    user.roleIds = '104';

                    break;
                case MemberType.SUPPLIER || "SUPPLIER":
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
    /**
     * member  
     * 供应商  orgId=3
     * 代理商 orgId =5
     */
    @Post('/api/member/verify/pass')
    async verifyMemberPass() {
        let member: Member = this.ctx.request.body;
        let dbMember = await conn.getRepository(Member).findOne(member.id);
        if (dbMember) {
            let newSuppilerOrg = new Org();
            newSuppilerOrg.createTime = new Date();
            newSuppilerOrg.isSystem = false;
            newSuppilerOrg.orgName = dbMember.name;
            newSuppilerOrg.parentId = 3;
            if (dbMember.orgId == 3) {
            } else {
                newSuppilerOrg.parentId = 5;
            }
            newSuppilerOrg.orgName = dbMember.name;
            newSuppilerOrg = await conn.getRepository(Org).save(newSuppilerOrg);
            dbMember.orgId = newSuppilerOrg.orgId;
            dbMember.memberStatus = AuditStatusEnum.approved;
            await conn.getRepository(Member).save(dbMember);
            this.ctx.body = success(newSuppilerOrg);


        } else {
            return this.ctx.body = err(400, '会员信息不存在');

        }

    }
    @Post('/api/member/verify/fail')
    async verifyMemberFail() {
        let member = this.ctx.request.body;
        if (member.id) {
            await conn.getRepository(Member).delete(member);
            this.ctx.body = success('ok');
        } else {
            this.ctx.body = err(400, '参数不全')
        }
    }

    @Post('/api/order/give')
    async orderGive() {
        let { order, user } = this.ctx.request.body;
        user = await conn.getRepository(User).findOne(user.id);
        if (user) {
            let member = await conn.getRepository(Member).findOne({ user: user });
            order = await conn.getRepository(Order).findOne(order.id);
            if (member && order) {
                order.masterMemberId = member.id;
                await conn.getRepository(Order).save(order);
                let notify = await this.service.lib.notify.orderGiveNotify(user.id, '', order.id);
                this.ctx.body = success({ order, notify });

            } else {
                this.ctx.body = err(400, '会员或订单不存在');
            }
        } else {
            this.ctx.body = err(400, '不存在的用户');
        }
    }

    @Post('/api/order/action')
    async orderAction() {
        let { order, action, msg } = this.ctx.request.body;

        order = await conn.getRepository(Order).findOne(order.id);
        if (order) {
            switch (action) {
                case ActionEnum.orderConfirm:
                    await conn.getRepository(Order).save(order);
                    await this.service.lib.notify.orderConfirmNotify(order.creatorId, '', order.id, msg);
                    return this.ctx.body = success({ msg: '订单确认成功' });
                case ActionEnum.depositPaid:
                    order.status = OrderStatusEnum.DEPOSIT_PAID;
                    await conn.getRepository(Order).save(order);
                    await this.service.lib.notify.orderDepositPaidNotify(order.creatorId, '', order.id, msg);
                    return this.ctx.body = success({ msg: '订单定金已付' });
                case ActionEnum.outTicket:
                    order.status = OrderStatusEnum.TICKET_OUT;
                    await conn.getRepository(Order).save(order);
                    await this.service.lib.notify.orderConfirmNotify(order.creatorId, '', order.id, msg);
                    return this.ctx.body = success({ msg: '订单已出票' });
                case ActionEnum.outTicket:
                    order.status = OrderStatusEnum.ALL_PAID;
                    await conn.getRepository(Order).save(order);
                    await this.service.lib.notify.orderConfirmNotify(order.creatorId, '', order.id, msg);
                    return this.ctx.body = success({ msg: '订单全款已付' });

                default:
                    return this.ctx.body = err(400, '未知的操作');
            }
        } else {
            return this.ctx.body = err(400, '订单不存在');
        }
    }

}