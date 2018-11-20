import { Controller } from "egg";
import { QueryParam } from '../../share_platform/framework/util/metadata/QueryParam';
import { success } from '../../share_platform/framework/util/res/success';
import { bp } from 'egg-blueprint';
import { Condtions } from '../../share_platform/framework/util/metadata/Condition';
import { Post } from '../../share_platform/framework/util/router/mapping';
import { validate, Body, Query } from '../../share_platform/framework/util/router/validate';
import { MetaWithItem } from '../../share_platform/framework/bean/MetaWithItem';
import { err } from '../../share_platform/framework/util/res/err';
export default class extends Controller {
    /**实体更新 */
    @validate
    @Post("/app/stq/entity/update")
    async dataUpdate(@Query({ className: 'string' }) className, @Body(MetaWithItem) body) {
        let result = await this.service.framework.stq.entityUpdate(className, body);
        this.ctx.body = success(result);
    }
    @validate
    @Post('/app/stq/entity/insert')
    async dataInsert(@Query({ className: 'string' }) className: string, @Body(Object) dataItem) {
        let insert;
        try {
            insert = await this.service.framework.stq.entityInsert(className, dataItem);
        } catch (e) {
            if (e) return this.ctx.body = err(400, '唯一错误');
        }
        this.ctx.body = success({ insert });
    }
    @validate
    @Post("/app/stq/entity/delete")
    async entityDelete(@Query({ className: 'string' }) className: string, @Body(Object) dataItem) {
        let del = await this.service.framework.stq.entityDel(className, dataItem);
        this.ctx.body = success({ del });
    }

    @bp.get("/app/stq/entity/meta")
    async entityMeta() {
        let className = this.ctx.query.className;
        let meta = await this.service.framework.stq.getEntityMeta(className);
        this.ctx.body = success({ metaObject: meta.metaObject });
    }
    entityDetail() {
        let { entity } = this.ctx.query;
        let queryParam: QueryParam = this.ctx.request.body;
        // let data = this.service.framework.stq.getEntityMeta(entity);
        let user = { username: '123', password: '123' };
        let token = this.service.framework.jwt.sign(user);
        this.ctx.body = { ok: true, data: { entity, queryParam, data: token } };
    }
    entityToken() {
        let { token } = this.ctx.query;
        this.ctx.body = success(this.service.framework.jwt.verify(token));
    }
    /**
   * post
   * ?className
   * body:QueryParameter
   */
    @bp.post("/app/stq/query")
    async entityQuery() {
        let token = this.ctx.get('Authorization');
        let data: { id: number, menuIds: number[] } = <any>this.service.framework.jwt.verifyIgnoreExpiration(token.replace('Bearer ', ''));

        let { className } = this.ctx.query
        let queryParam: QueryParam = this.ctx.request.body;
        if (!queryParam) {
            queryParam = new QueryParam();
            queryParam.queryConditions = Condtions({});
            queryParam.pageParam.pageSize = 3;
        }
        // let meta = this.service.framework.stq.entityDetail(entity);
        let paging: any
        try {
            paging = await this.service.framework.stq.findPagedEntity(queryParam, className, data.menuIds);
        } catch (e) {
            if (e) return this.ctx.body = err(500, e + '')
        }
        this.ctx.body = success({ paging, data })
    }
    async entityInsert() {
        let { entity } = this.ctx.query;
        let { dataItems } = this.ctx.body;
        let inserts = []
        try {
            inserts = await this.service.framework.stq.entityInsert(entity, dataItems as any[]);
        } catch (e) {
            if (e) return this.ctx.body = err(500, '唯一错误');
        }
        this.ctx.body = success(inserts);
    }


} 