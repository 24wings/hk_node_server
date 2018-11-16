import 'reflect-metadata'

export function getFuncParam(func: Function): string[] {
    return ((/\(\s*([\s\S]*?)\s*\)/.exec(func as any) as any)[1] as any).split(/\s*,\s*/)
}

export class A {
    name: string;
}

export class B {
    age: number;
}

export class C {
    name1: string;
    age1: number;
}
