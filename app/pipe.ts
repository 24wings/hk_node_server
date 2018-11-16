import * as _ from 'reflect-metadata';
console.log(_)
const enumAlias = Symbol('alias');
enum UserType {
    Member = "Member",
    Vip = "Vip"
}

export function setAlias(obj: Object, mappers: { value: string, alias: string }[]) {
    Reflect.defineMetadata(enumAlias, mappers, obj)
}
export function getAlias(obj: Object): { value: string, alias: string } {
    return Reflect.getMetadata(enumAlias, obj) ? Reflect.getMetadata(enumAlias, obj) : []
}
setAlias(UserType, [{ alias: "会员", value: UserType.Member }])
// let alias = getAlias(UserType);
// console.log(alias); 