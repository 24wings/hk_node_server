import { Service } from "egg";
import { getMetaEntity } from '../../share_platform/framework/util/metadata/MetaEntity';
import { getProp } from '../../share_platform/framework/util/metadata/Field';
import { QueryParam } from '../../share_platform/framework/util/metadata/QueryParam';
require('../../share_platform/framework/entity/rbac/MetaField')
import { conn } from '../../typeorm';
import { QueryCondition } from '../../share_platform/framework/util/metadata/QueryCondition';
import { getPower } from '../../Power';
// import { Member } from '../../share_platform/market/entity/member/Member';
// import { pageParameter } from '../../share_platform/framework/util/metadata/pageParameter';
// let dir='../../share_platform'
export default class extends Service {
    public async findPagedEntity(queryParameter: QueryParam, entityPath: string, menuIds: number[] = []) {
        let entity = this.getEntity(entityPath);
        if (entity) {
            let powerObject = getPower(entity);
            if (powerObject) {
                if (menuIds.indexOf(powerObject.Q as any) == -1) {
                    throw new Error("权限不足")
                }
            } else {
                // 没有设置权限可以直接通过或者强制权限不过
            }
        }
        return this.findPageEntityByEntity(queryParameter, entity);
    }
    public async findPageEntityByEntity(queryParam: QueryParam, entity: any): Promise<{ rows: any[], count: number }> {
        console.log(queryParam, entity);
        if (!queryParam.pageParam) queryParam.pageParam = { pageIndex: 0, pageSize: 10 };
        if (queryParam.pageParam.pageSize == 0 || (!queryParam.pageParam.pageSize)) queryParam.pageParam.pageSize = 1000;
        if (!queryParam.queryConditions) queryParam.queryConditions = [];
        let result = await conn.manager.getRepository(entity).findAndCount({
            // where: {}
            // relations: ['boundFlight', "returnFlight"],
            where: this.getWhereSql(queryParam.queryConditions),
            take: queryParam.pageParam.pageSize,
            skip: queryParam.pageParam.pageIndex * queryParam.pageParam.pageSize
        })
        // let result = await conn
        //     .createQueryBuilder(entity, entity.name)

        //     .where(this.getWhereSql(queryParam.queryConditions))
        //     .take(queryParam.pageParameter.pageSize)
        //     .offset(queryParam.pageParameter.pageIndex * queryParam.pageParameter.pageSize)
        //     .getManyAndCount() as any;
        return { rows: result["0"], count: result['1'] }

    }
    getWhereSql(conditions: QueryCondition[]) {
        let whereSql = ``;
        conditions.forEach((condition, i) => {
            if (condition.compare == ':') condition.compare = 'like';
            if (condition.compare == 'like') condition.value = `%${condition.value}%`
            whereSql += `${condition.field} ${condition.compare} ${typeof condition.value == 'string' && condition.compare != 'in' ? `'${condition.value}'` : condition.value} ${i == conditions.length - 1 ? '' : condition.andOr + ' '}`
        })
        if (!whereSql) whereSql = '1=1'
        return whereSql;
    }
    getEntityName(entityPath: string): any {

        return entityPath.split("/").pop() as string;

    }
    getEntity(entityPath: string) {
        let className = '/share_platform/' + (entityPath as string).replace('com.fastsun.', '').replace(/\./g, '/');


        let name = this.getEntityName(className);
        if (typeof entityPath == "string") {
            let entityModule;
            try {
                entityModule = require('../..' + className)

            } catch (e) {
                if (e) throw new Error("模块错误");
            }
            return entityModule[name];
        }
    }
    getEntityMeta(entityPath) {

        if (typeof entityPath == "string") {
            let entity = this.getEntity(entityPath);
            let metaObject = getMetaEntity(entity);
            // let metaFields = getField(entity.prototype);
            metaObject.metaFields = getProp(entity.prototype)
            metaObject.objectCode = entityPath;
            return {
                metaObject,
                // metaFields,
                prop: getProp(entity.prototype)
            }
        } else {
            throw new Error("模块名称不合法")
        }
    }
    async entityDel(entityPath: string, values: any) {
        let entity = this.getEntity(entityPath);
        let id = conn.getRepository(entity).getId(values)
        return conn.getRepository(entity).delete(id);
    }

    async    entityInsert(entityPath: string, values: any) {
        let entity = this.getEntity(entityPath)
        return conn.getRepository(entity).save(values);
    }
    async entityUpdate(entityPath: string, updateObject: any) {
        // let className = '/share_platform/' + (entityPath as string).replace('com.fastsun.', '').replace(/\./g, '/');
        let entity = this.getEntity(entityPath)
        let id = conn.getRepository(entity).getId(updateObject);
        return conn.getRepository(entity).update(id, updateObject);
    }

}
