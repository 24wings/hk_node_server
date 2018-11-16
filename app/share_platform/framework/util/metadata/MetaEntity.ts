import { MetaObject } from '../../entity/rbac/MetaObject';
const metaKey = Symbol("metaId");


/**
 * 用于单表查询的装饰器
 * 
 * @param value 
 */
export function MetaEntity(value?: MetaObject) {
    let defaultMetaObject: MetaObject = { isCelledit: false, } as any;
    if (value) value = Object.assign(defaultMetaObject, value);
    else value = <MetaObject>defaultMetaObject;
    return (target: any) => {
        if (value) value.objectName = target.name;
        Reflect.defineMetadata(metaKey, value, target)
        return target;
    }
}
export function getMetaEntity(target: any): MetaObject {
    return Reflect.getMetadata(metaKey, target)
} 