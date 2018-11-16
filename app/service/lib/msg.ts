import { Service } from 'egg';
// import db = require('../share/model');

export default class extends Service {


    // public getMarketPhoneLastAuthcode(phone: string, mktId: number) {

    //     return db.Msg.findOne({ phone, mktId, type: "authcode" }, { order: { sendTime: 'DESC' } });


    // }


    // async sendAppAuthcode(phone: string, mktId: number): Promise<SendSMSResponse> {

    //     let randomCode = this.getRandomCode(6);
    //     let status = await this.checktMarketBalanceStatus(mktId);
    //     let response: SendSMSResponse = null as any;
    //     if (status == "success" || status == "warning") {

    //         response = await this.ctx.service.sms.senAppSignupAuthcode(phone,
    //             "{\"time\":\" " + randomCode + "\", \"address\":\"123\"}");
    //         this.costMarketBalance(mktId);
    //     }
    //     if (status == "warning" || status == "fail") {
    //         this.addMarketWarningMsg("短信费用不足", "短信费用不足", mktId);
    //     }
    //     if (response) {
    //         let code = response.Code;
    //         let bizId = response.BizId
    //         if (code.toLowerCase() == "ok") {
    //             this.addMsgContent(phone, bizId, randomCode, "authcode", mktId);
    //         }
    //         return response;
    //     } else {
    //         return response;
    //     }


    // }

    // /**
    //  * 自动计费,报警
    //  * 
    //  * 返回 * success 成功 * warning 成功但警报 * fail 失败,警报
    //  */
    // async   checktMarketBalanceStatus(mktId: number) {

    //     var market = await db.Market.findOne({ mktId });
    //     if (market) {
    //         if (market.balance > 100) {
    //             return "success";
    //         } else if (market.balance >= 0 && market.balance <= 100) {
    //             return "warning";
    //         } else {
    //             return "fail";
    //         }
    //     } else {
    //         throw Error(JSON.stringify({ status: 500, msg: '找不到市场' }));
    //     }

    // }

    // async   addMsgContent(phone: string, bizId: string, addtion: string, type: string, mktId: number): Promise<boolean> {
    //     var querySendDetailResponse = await this.ctx.service.sms.querySendDetails(phone, bizId);
    //     var detail = querySendDetailResponse.SmsSendDetailDTOs.SmsSendDetailDTO[0];
    //     var content = detail.Content;
    //     var newMsg = await new db.Msg();
    //     newMsg.content = content;
    //     newMsg.bizId = bizId;
    //     newMsg.addtion = addtion;
    //     newMsg.type = type;
    //     newMsg.phone = phone;
    //     newMsg.mktId = mktId;
    //     await newMsg.save();

    //     return true;
    // }

    // async addMarketWarningMsg(title: string, content: string, mktId: number): Promise<boolean> {
    //     var newCommonLog = new db.CommonLog();
    //     newCommonLog.level = "warning";
    //     newCommonLog.mktId = mktId;
    //     newCommonLog.title = title;
    //     newCommonLog.content = content;
    //     await newCommonLog.save()
    //     return true;
    // }

    // async costMarketBalance(mktId: number) {
    //     var market = await db.Market.findOne({ mktId })
    //     if (market) {

    //         market.balance = market.balance - .5;
    //         db.Market.save(market)

    //     } else {
    //         return false;
    //     }
    //     return true;
    // }

    // getRandomCode(strLength: number): string {
    //     return new Date().getTime().toString().substr(strLength);
    // }

}