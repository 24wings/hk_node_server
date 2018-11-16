import { decimal2Float } from '../../../service/framework/util';

export const decimalTransform = {
    from: decimal2Float,
    to: (value) => {
        // console.log(`from: type ${typeof value}`, value);
        return value;
    },
}