import 'reflect-metadata'
const powerKey = Symbol("power");
export interface PowerObject {
    C?: number;
    U?: number;
    D?: number;
    Q?: number;
}
export function Power(power: { C?: number, U?: number, D?: number, Q?: number } = {}) {
    return (target) => {
        Reflect.defineMetadata(powerKey, power, target);
    }
}

export function getPower(target): PowerObject {
    return Reflect.getMetadata(powerKey, target);
}

