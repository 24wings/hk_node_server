import { Controller } from "egg";
import { conn } from '../../typeorm';
import { Developer } from '../../share_platform/framework/entity/rbac/Developer';
import { err } from '../../share_platform/framework/util/res/err';
import { success } from '../../share_platform/framework/util/res/success';
import { error } from 'util';
import { Menu } from '../../share_platform/framework/entity/rbac/Menu';
import { MenuTypeEnum } from '../../share_platform/framework/enum/MenuType.enum';
import { bp } from 'egg-blueprint';
import { QueryParam } from '../../share_platform/framework/util/metadata/QueryParam';
import { ProdCatalog } from '../../share_platform/market/entity/common/ProdCatalog';
import { Market } from '../../share_platform/framework/entity/rbac/Market';
import { Org } from '../../share_platform/framework/entity/rbac/Org';
import { Role } from '../../share_platform/framework/entity/rbac/Role';
import { User } from '../../share_platform/framework/entity/rbac/User';
import { Params } from '../../share_platform/framework/entity/sysConfig/Params';
import { RecvPaySubject } from '../../share_platform/market/entity/common/RecvPaySubject';
import { Customer } from '../../share_platform/market/entity/member/Customer';
import { Post } from '../../share_platform/framework/util/router/mapping';
export default class extends Controller {
    @Post('/dev/menu/sync')
    async menuSync() { 
        let menus: Menu[] = this.ctx.request.body;
        let data = await conn.getRepository(Menu).save(menus);
        this.ctx.body = success({ menus: data })
    }
    @Post('/dev/role/sync')
    async roleSync() {
        let roles: Role[] = this.ctx.request.body;
        let data = await conn.getRepository(Role).save(roles);
        this.ctx.body = success({ roles: data })
    }
    @Post('/dev/org/sync')
    async orgSync() {
        let orgs: Org[] = this.ctx.request.body;
        let data = await conn.getRepository(Org).save(orgs);
        this.ctx.body = success({ orgs: data })
    }
    @Post('/dev/user/sync')
    async userSync() {
        let users: User[] = this.ctx.request.body;
        let data = await conn.getRepository(User).save(users);
        this.ctx.body = success({ users: data })
    }
    @bp.get('/employee/employee/no-role')
    async noRole() {
        let roles = await conn.getRepository(User).find({});
        this.ctx.body = success({ roles });
    }
    @bp.get('/api/market/delete')
    async  marketDelete() {
        let del = await conn.getRepository(Market).delete(this.ctx.query.mktId);
        this.ctx.body = success({ del });
    }
    @bp.get('/database/destory')
    async databaseDestory() {
        let db = conn.driver.database
        if (db == 'test' || db == 'dotnetcore') {
            this.ctx.body = err(400, '不能删除数据库 test 或 dotnetcore');
        } else {
            let drop = await conn.query(`drop database ${db}`);
            let create = await conn.query(`Create Database If Not Exists ${db}`)
            this.ctx.body = success({ msg: '删除并创建数据库成功', drop, create })
        }
    }

    @bp.get('/api/customer/findByMobi')
    async findByMobi() {
        let { mobi, mktId } = this.ctx.query;
        let customer = await conn.getRepository(Customer).findOne({ where: { mobi, mktId } });
        this.ctx.body = customer ? success({ customer }) : err(400, '手机尚未注册用户');
    }
    @bp.post('/api/employee/update')
    async employeeUpdate() {
        let ep: User = this.ctx.request.body;
        ep.password = this.service.framework.jwt.sign({ userName: ep.userName, password: ep.password });
        let up = await conn.getRepository(User).update({ id: this.ctx.request.body.id }, this.ctx.request.body);
        this.ctx.body = success({ up });
    }
    @bp.post('/api/param/create')
    async paramCreate() {
        let res = await conn.getRepository(Params).insert(this.ctx.request.body);
        this.ctx.body = success({ res });
    }
    @bp.post('/api/param/list')
    async paramList() {
        let paging = await this.service.framework.stq.findPageEntityByEntity(this.ctx.request.body, Params);
        this.ctx.body = success({ paging });
    }
    @bp.post('/api/employee/create')
    async employeeCreate() {
        let ep: User = this.ctx.request.body;
        ep.password = this.service.framework.jwt.sign(ep);
        ep = await conn.getRepository(User).insert(Object.assign(new User(), this.ctx.request.body)) as any;
        this.ctx.body = success(ep);
    }
    @bp.get('/api/role/delete')
    async roleDelete() {
        let del = await conn.getRepository(Role).delete({ roleId: this.ctx.query.roleId });
        this.ctx.body = success({ del });
    }
    @bp.post('/api/role/update')
    async roleUpdate() {
        let update = await conn.getRepository(Role).update({ roleId: this.ctx.request.body.roleId },
            { roleName: this.ctx.request.body.roleName, menuIds: this.ctx.request.body.menuIds });
        this.ctx.body = success(update);
    }
    @bp.post('/api/role/create')
    async roleCreate() {
        let role = await conn.getRepository(Role).insert(this.ctx.request.body);
        this.ctx.body = success({ role });
    }
    @bp.get('/api/market/menus')
    async marketMenuList() {
        let market = await conn.getRepository(Market).findOne({ mktId: this.ctx.query.mktId });
        if (market) {
            let menus = await conn.manager
                .createQueryBuilder(Menu, "menu")
                .where(`menu.menuId IN (:menuIds)`, { menuIds: market.menuIds ? market.menuIds.split(',') : ['1', '2'] })
                .getMany()
                ;
            this.ctx.body = success({ menus });
        } else {
            this.ctx.body = err(404, '市场不存在');
        }
    }
    @bp.post('/api/employee/list')
    async employeeList() {
        let paging = await this.service.framework.stq.findPageEntityByEntity(this.ctx.request.body, User);
        this.ctx.body = success({ employees: paging })
    }
    @bp.post('/api/role/list')
    async roleList() {

        let paging = await this.service.framework.stq.findPageEntityByEntity(this.ctx.request.body, Role);
        for (let role of paging.rows) {
            role.menus = await conn.getRepository(Menu).findByIds(role.menuIds.split(','));
        }
        this.ctx.body = success({ roles: { rows: paging.rows } })
    }
    @bp.post('/api/org/update')
    async orgUpdate() {
        let up = await conn.getRepository(Org).update({ orgId: this.ctx.request.body.orgId }, this.ctx.request.body);
        this.ctx.body = success({ up });
    }
    @bp.get('/api/org/detail')
    async orgDetail() {
        let org = await conn.getRepository(Org).findOne({ where: { orgId: this.ctx.query.orgId } });
        this.ctx.body = success({ org });
    }
    @bp.get('/api/org/delete')
    async orgDelete() {
        let del = await conn.getRepository(Org).delete({ orgId: this.ctx.query.orgId });
        this.ctx.body = success({ del });
    }
    @bp.post('/api/org/create')
    async  orgCreate() {
        let org = await conn.getRepository(Org).insert([this.ctx.request.body])
        this.ctx.body = success({ org });
    }
    @bp.post('/api/org/list')
    async orgList() {
        let paging = await this.service.framework.stq.findPageEntityByEntity(this.ctx.request.body, Org);
        this.ctx.body = success({ orgs: paging });
    }
    @bp.get('/api/market/detail')
    async marketDetail() {
        let market = await conn.getRepository(Market).findOne({ mktId: this.ctx.query.mktId });
        this.ctx.body = success({ market });
    }
    @bp.post('/api/market/update')
    async marketUpdate() {
        let up = await conn.getRepository(Market).update({ mktId: this.ctx.request.body.mktId }, this.ctx.request.body)
        this.ctx.body = success({ up });
    }
    @bp.post('/api/market/create')
    async marketCreate() {
        let market = await conn.getRepository(Market).insert([this.ctx.request.body])
        this.ctx.body = success({ market });
    }

    @bp.post('/api/market/page')
    async marketPage() {
        let paging = await this.service.framework.stq.findPageEntityByEntity(this.ctx.request.body, Market);
        this.ctx.body = success({ markets: paging })
    }
    @bp.get('/api/category/delete')
    async categoryDelete() {
        let del = await conn.getRepository(ProdCatalog).delete({ id: this.ctx.query.cateId });
        this.ctx.body = success({ del });
    }
    @bp.post('/api/dev/category/update')
    async categoryUpdate() {
        let body = this.ctx.request.body;
        let up = await conn.getRepository(ProdCatalog).update({ id: body.cateId }, { catCode: body.cateCode, catName: body.cateName })
        this.ctx.body = success({ up });
    }
    @bp.post('/api/category/create')
    async categoryCreate() {
        let category = this.ctx.request.body;
        category = await conn.getRepository(ProdCatalog).insert({
            catName: category.cateName,
            catCode: category.cateCode,
            mktId: 0,
            parentId: category.parentId && category.parentId != '-1' ? category.parentId : 0
        });
        this.ctx.body = success(category);
    }
    @bp.get("/api/category/list")
    async categoryList() {

        let { page = 0, pageSize = 10, parentId = 0 } = this.ctx.query;
        if (typeof page == 'string') page = parseInt(page);
        if (typeof pageSize == 'string') pageSize = parseInt(pageSize);
        let categorys = await conn.getRepository(ProdCatalog).find({ where: { mktId: 0, parentId }, take: pageSize, skip: page * pageSize })
        this.ctx.body = success({
            paging: {
                rows: categorys
            }
        });
    }
    @bp.post('/api/subject/update')
    async  subjectUpdate() {
        let subject = this.ctx.request.body;
        let up = await conn.getRepository(RecvPaySubject).update({ subjectId: subject.subId },
            {
                subjectName: subject.subName,
                subjectCode: subject.subCode,
            })
        this.ctx.body = success({ up });

    }
    @bp.post('/api/subject/create')
    async  subjectCreate() {
        let subject = this.ctx.request.body;
        subject = await conn.getRepository(RecvPaySubject).insert
            ([{
                subjectName: subject.subName,
                mktId: subject.marketId,
                subjectCode: subject.subCode,
                parentId: subject.parentId
            }]);
        this.ctx.body = success(subject);
    }
    @bp.get('/api/subject/custom-subjects')
    async subjectlist() {
        let subjects: RecvPaySubject[] = [];
        console.log(this.ctx.query)
        if (this.ctx.query.parentId) {
            subjects = await conn.getRepository(RecvPaySubject).find({ parentId: parseInt(this.ctx.query.parentId) });
        } else {
            subjects = await conn.getRepository(RecvPaySubject).find({ parentId: 0 });
        }
        this.ctx.body = success({ subjects: subjects.map(sub => { return { subName: sub.subjectName, subId: sub.subjectId, subCode: sub.subjectCode, parentId: sub.parentId } }) });
    }
    @bp.get('/dev/delete')
    async devDelete() {
        let del = await conn.getRepository(Developer).delete({ devId: this.ctx.query.devId });
        this.ctx.body = success({ del })
    }
    @bp.post('/dev/update')
    async devUpdate() {
        let dev: Developer = this.ctx.request.body;
        dev.password = this.service.framework.jwt.sign({ password: dev.password });
        let up = await conn.getRepository(Developer).update({ devId: dev.devId }, dev);
        this.ctx.body = success({ up });

    }
    @bp.post('/dev/create')
    async  devCreate() {
        let dev: Developer = this.ctx.request.body;
        dev.password = this.service.framework.jwt.sign(dev);
        dev = await conn.getRepository(Developer).insert(Object.assign(new Developer(), dev)) as any;
        this.ctx.body = success(dev);
    }
    @bp.get('/dev/page')
    async devPage() {
        let { page, pageSize } = this.ctx.query;
        if (typeof page == 'string') page = parseInt(page);
        if (typeof pageSize == 'string') pageSize = parseInt(pageSize);
        let devs = await conn.getRepository(Developer).find({ skip: page * pageSize, take: pageSize });
        this.ctx.body = success({ developers: { rows: devs, count: devs.length } });

    }

    @bp.post('/api/menu/update')
    async menuUpdate() {
        let up = await conn.getRepository(Menu).update({ menuId: this.ctx.request.body.menuId }, this.ctx.request.body);
        this.ctx.body = success({ update: up });
    }
    @bp.post('/api/menu/create')
    async menuCreate() {
        let up = await conn.getRepository(Menu).insert([this.ctx.request.body]);
        this.ctx.body = success({ menu: up });
    }
    @bp.get('/api/menu/delete')
    async menuDelete() {
        let up = await conn.getRepository(Menu).delete({ menuId: this.ctx.query.menuId });
        this.ctx.body = success({ delete: up });
    }
    @bp.get('/api/menu/detail')
    async menuDetail() {
        let { menuId } = this.ctx.query;
        let menu = await conn.getRepository(Menu).findOne({ menuId });
        this.ctx.body = success({ menu });
    }
    @bp.post('/dev/login')
    async   devLogin() {
        let { userName, password } = this.ctx.request.body;
        userName = '123';
        password = '123';
        let dev = await conn.getRepository(Developer).findOne({ devUserName: userName })
        if (dev) {
            let getUser = this.service.framework.jwt.verifyIgnoreExpiration(dev.password) as Developer;
            let token = this.service.framework.jwt.sign(JSON.parse(JSON.stringify(dev)));
            if (password == getUser.password) {
                let menus = await conn.getRepository(Menu).find({ where: { menuType: MenuTypeEnum.Dev } });
                this.ctx.body = success({ dev, menus, token });
            } else {
                this.ctx.body = error(400, '用户密码错误')
            }
        } else {
            this.ctx.body = err(400, '用户不存在');
        }
    }
    @bp.get('/dev/add')
    async devAdd() {
        let { userName, password } = this.ctx.query;
        let passwordHash = this.service.framework.jwt.sign({ devUserName: userName, password })
        let res = await conn.getRepository(Developer).insert(Object.assign(new Developer(), { devUserName: userName, password: passwordHash }));
        this.ctx.body = success(res);
    }
    @bp.post('/api/menu/list')
    async menuList() {
        let req: QueryParam = this.ctx.request.body;
        let paging = await this.service.framework.stq
            .findPageEntityByEntity(req, Menu);
        // let menus = await conn.getRepository(Menu).find({ menuType: MenuTypeEnum.Dev });
        this.ctx.body = success({ menus: paging });
    }
}