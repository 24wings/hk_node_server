const noCol = Symbol('nocol')
/**
 * 没有意义,只是标注,不用加入@Column 标注
 */
export function Ignore() {
    return Reflect.metadata(noCol, '');
}