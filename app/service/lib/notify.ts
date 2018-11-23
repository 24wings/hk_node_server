import { Service } from 'egg';
import { MsgNotify } from '../../share_platform/hk/entity/MsgNotify';
import { MsgTypeEnum } from '../../share_platform/market/entity/enum/MsgType.enum';
import { conn } from '../../typeorm';

export default class extends Service {

    private createUserNotify(userId: number, title: string, viewName: string,
        options: { msgType: MsgTypeEnum, isWebPush: boolean, addtion: string, content?: string }) {
        let notify = new MsgNotify();
        notify.userId = userId;
        notify.isWebpush = !!options.isWebPush;
        notify.viewName = viewName;
        notify.title = title;
        notify.content = notify.content ? notify.content : notify.title;
        notify.addition = options.addtion;

        return notify;
    }
    /** 订单分配通知 */
    async orderGiveNotify(userId, actor, orderId) {
        let notify = this.createUserNotify(userId, `${actor} 分配给您一个订单`, `order-action`, { msgType: MsgTypeEnum.Task, isWebPush: true, addtion: JSON.stringify({ orderId }) });
        return conn.getRepository(MsgNotify).save(notify);
    }
    /** 订单确认通知 */
    async orderConfirmNotify(userId, actor, orderId, msg) {
        let notify = this.createUserNotify(userId, `${actor} 确认了订单`, `order-confirm`, { msgType: MsgTypeEnum.Task, isWebPush: true, addtion: JSON.stringify({ orderId, msg }) });
        return conn.getRepository(MsgNotify).save(notify);
    }
    /** 订单定金已付通知 */
    async orderDepositPaidNotify(userId, actor, orderId, msg) {
        let notify = this.createUserNotify(userId, `${actor} 确认了订单`, `order-deposit-paid`, { msgType: MsgTypeEnum.Task, isWebPush: true, addtion: JSON.stringify({ orderId, msg }) });
        return conn.getRepository(MsgNotify).save(notify);
    }

}