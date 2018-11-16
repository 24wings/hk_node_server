import { Service } from "egg";
import { conn } from '../../typeorm';
import { OrderNo } from '../../share_platform/framework/entity/rbac/OrderNo';
// require('../../share_platform/framework/entity/rbac/MetaField')
export default class extends Service {
    /** 获取转账订单 */
    async getTransferOrderNo(mktId: number) {
        return this.getNo(mktId + `Transfer`);
    }
    async getNo(key: string) {
        let orderNo = await conn.getRepository(OrderNo).findOne({ currentKey: key });
        if (!orderNo) {
            await conn.getRepository(OrderNo).insert({ currentKey: key, currentValue: 0 })
            return 0
        } else {
            await conn.getRepository(OrderNo).update({ id: orderNo.id }, { currentValue: ++orderNo.currentValue })
            return ++orderNo.currentValue;
        }
    }
    getOrderNo(mktId: number) {
        return this.getNo(mktId + 'Order');
    }
}

export function decimal2Float(str: string | number) {
    if (typeof str == 'string') {
        return parseFloat(str)
    }
    return str;

}