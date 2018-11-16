import "reflect-metadata";
import { Parameter, DataType, NewTObject } from '../swagger/swagger';
import { Controller } from 'egg';


export const requiredMetadataKey = Symbol("required");
interface ParamObject {
    [key: string]: DataType;
}
export function Query(param: ParamObject) {

    return (target: Object, propertyKey: string | symbol, _: number) => {
        let existingRequiredParameters: Parameter[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
        Object.keys(param).forEach(key => {
            existingRequiredParameters.unshift({ name: key, type: param[key], in: 'query' })
        });
        Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
    }
}

export function Body(dataType: NewTObject) {
    return (target: Object, propertyKey: string | symbol, _: number) => {
        let existingRequiredParameters: Parameter[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
        existingRequiredParameters.unshift({ name: dataType.name, type: dataType, in: 'body' })
        Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
    }
}

export function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    let method = descriptor.value;

    descriptor.value = function () {
        let app = <Controller>(this as any);
        let ctx = app.ctx;
        debugger;
        let args: any[] = []
        let requiredParameters: Parameter[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
        if (requiredParameters) {
            debugger;
            requiredParameters.forEach((p) => {
                let val;
                if (p.in == 'query') {
                    val = ctx.query[p.name];
                } else if (p.in == 'body') {
                    val = ctx.request.body;
                }
                if (val) {
                    switch (p.type) {
                        case 'string':
                            args.push(val);
                            break;
                        case 'integer':
                            args.push(parseInt(val));
                            break;
                        case 'float':
                            args.push(parseInt(val));
                            break;
                        case 'date':
                            args.push(new Date(val));
                            break;
                        default:
                            args.push(Object.assign(new p.type(), ctx.request.body))
                    }
                } else {
                    throw new Error('参数缺少:' + p.name + ` [in ${p.in}]`)
                }
            })
        }
        return (method as any).apply(this, args);
    }
}