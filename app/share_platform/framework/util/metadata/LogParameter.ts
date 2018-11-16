export function logParamTypes(target: any, key: string) {
    var types = Reflect.getMetadata("design:paramtypes", target, key);
    var s = types.map(a => a.name).join();
    console.log(`${key} param types: ${s}`);
}  