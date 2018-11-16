import { getFuncParam } from './metadata/getFuncParam';
import _ = require('lodash')
const mapperKey = Symbol("mapperKey");
export class MapperConfig {
}

/**
 * Mapper 利用数据转换 ,将客户端的数据转换成另一种数据,或服务端防止过多的数据返回
 * @param value 
 */
export function Mapper(value?: MapperConfig) {
    let defaultMetaObject: MapperConfig = {} as any;
    if (value) value = Object.assign(defaultMetaObject, value);
    else value = <MapperConfig>defaultMetaObject;
    return (target: any) => {
        Reflect.defineMetadata(mapperKey, value, target)
        return target;
    }
}

export function getMapper(target: new () => any): MapperConfig {
    return Reflect.getMetadata(mapperKey, target)
}


export function Mappings(mappings: { source: string, target: string }[]) {
    return (target, key: string, descriptor: TypedPropertyDescriptor<Function>) => {
        let params = getFuncParam(target[key]);
        let returnType = Reflect.getMetadata("design:returntype", target, key);
        descriptor.value = function () {
            let result = new returnType();
            let mappingArg = {};
            for (let i in arguments) {
                mappingArg[params[i]] = arguments[i];
            }
            for (let mapping of mappings) {
                let sourceKey = _.at(mappingArg, mapping.source);
                _.set(result, mapping.target, sourceKey.pop())
            }
            return result;
        }
    }
}