import { Controller } from "egg";
import { bp } from 'egg-blueprint';
import { success } from '../share_platform/framework/util/res/success';
import { conn } from '../typeorm';
import { Market } from '../share_platform/framework/entity/rbac/Market';
import { validate, Body, Query } from '../share_platform/framework/util/router/validate';
import { Get, Post } from '../share_platform/framework/util/router/mapping';
import { User } from '../share_platform/framework/entity/rbac/User';
import { A, B } from '../share_platform/framework/util/metadata/getFuncParam';
import { D } from '../service/framework/mapper';

export default class extends Controller {
    @Get('/test')
    testMapping() {
        let a = new A();
        a.name = "aname"
        let b = new B();
        b.age = 23;
        let d = new D();
        let c = this.service.framework.mapper.from(a, b, d);
        this.ctx.body = success({ c });
    }

    @validate
    @Get('/common2')
    async common(@Body(User) user: User, ) {
        this.ctx.body = { ok: true, user }
    }
    @validate
    @bp.get('/app/common/send-authcode')
    async  sendAuthcode(
        @Query({ phone: 'string' }) phone: string,
        @Query({ mktId: 'integer' }) mktId: number,
        @Query({ verifyType: "string" }) verifyType: string) {
        console.log(phone, mktId, verifyType);
        debugger;
        let res = await this.service.framework.msg.sendAuthcode(phone, verifyType, mktId);
        this.ctx.body = success({ res });
    }
    @bp.get('/app/common/market-list')
    async  marketList() {
        let markets = await conn.getRepository(Market).find();
        this.ctx.body = success({ markets });
    }
    @Post('/common/upload')
    async upload() {
        let { base64 } = this.ctx.request.body;
        let res = await this.service.lib.oss.uploadImage(base64);
        this.ctx.body = res;
    }
}