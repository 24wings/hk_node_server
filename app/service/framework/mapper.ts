import { Service } from 'egg';
import { Mappings } from '../../share_platform/framework/util/Mapper';
import { A, B, C } from '../../share_platform/framework/util/metadata/getFuncParam';
export class D {
    sex: number;
}
export default class extends Service {
    @Mappings([{ source: "a.name", target: "name1" }, { source: "b.age", "target": "age1" }])
    from(a: A, b: B, d: D): C {
        return { a, b, d } as any;
    }
}