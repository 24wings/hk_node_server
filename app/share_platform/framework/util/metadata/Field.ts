import "reflect-metadata";
import { MetaField } from '../../entity/rbac/MetaField';
const keysKey = Symbol("keys");
/** 
 * 用于单表查询的装饰器
 * 
 * @param value  
 */
export function Prop(value?: MetaField) {
    let defaultMetaField = { id: 1, recno: 0, isShow: true, alias: '', objectCode: '', isQuery: false };
    if (value) value = Object.assign(defaultMetaField, value)
    else value = <MetaField>defaultMetaField;

    return (target: any, propKey: string) => {
        if (value) {
            if (!value.alias) value.alias = value.fieldName;
            value.fieldName = propKey;

            let type = Reflect.getMetadata('design:type', target, propKey);
            value.fieldType = type;

            switch (type) {
                case Number:
                    value.fieldType = "int";
                    break;
                case String:
                    value.fieldType = "varchar";
                    break;
                case Date:
                    value.fieldType = "date";
                    break;
                case Boolean:
                    value.fieldType = "boolean";
                    break;
                default:
                    value.fieldType = "unknow";
            }
            // console.log(value, type.toString(), type.name)

        }
        let keys = Reflect.getMetadata(keysKey, target);
        if (!keys) {
            keys = [value]
        } else {
            keys.push(value);
        }
        Reflect.defineMetadata(keysKey, keys, target);
    }
}

export function getProp(target: any) {
    return Reflect.getMetadata(keysKey, target);
}
