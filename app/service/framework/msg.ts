import { Service } from "egg";
import { SMSLog } from '../../share_platform/market/entity/common/SMSLog';
import { conn } from '../../typeorm';

export default class extends Service {
    async  sendAuthcode(mobi: string, verifyType: string, mktId: number) {
        let verifyCode = new Date().getTime().toString().substr(-4);
        let response = await this.service.lib.sms.senAppSignupAuthcode(mobi, verifyCode);
        if (response.Code.toLowerCase() == 'ok') {

            let msg = await this.service.lib.sms.querySendDetails(mobi, response.BizId);
            let sendsms = Object.assign(new SMSLog(), {
                verifyCode,
                verifyType,
                mktId,
                mobi,
            } as SMSLog);
            if (msg.SmsSendDetailDTOs.SmsSendDetailDTO[0]) {
                sendsms.content = msg.SmsSendDetailDTOs.SmsSendDetailDTO[0].Content;
                return conn.getRepository(SMSLog).insert(sendsms)
            } else {
                sendsms.content = 'unkown';
                return conn.getRepository(SMSLog).insert(sendsms)
            }

        }

        return response;
    }
}