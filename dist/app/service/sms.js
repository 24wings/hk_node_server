"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const egg_1 = require("egg");
// let enpoint = `http://1770567526081147.mns.cn-hangzhou.aliyuncs.com/`;
const accessKeyId = "LTAIcMnaxxUG7dbk";
const secretAccessKey = "VhNgQZrGYz7dXpiCUS8r36mbLgy6db";
const SMSClient = require("@alicloud/sms-sdk");
// const accessKeyId = "LTAIcMnaxxUG7dbk";  //我的
// const secretAccessKey = "VhNgQZrGYz7dXpiCUS8r36mbLgy6db"; //我的
// const accessKeyId = "LTAIwItdPKtaGFo6";
// const secretAccessKey = "mwWHkKrkoYr7QxdH1Txuan2eRWj1OD";
let smsClient = new SMSClient({ accessKeyId, secretAccessKey });
// let signature = {
//   // bangwei: "邦为科技"
//   bangwei: "众合致胜"
// };
// let templateCodes = {
//   //bangweiUserAuthCode: "SMS_127158851", // 验证码
//   bangweiUserAuthCode: "SMS_120376411",
//   bangweiRegisterRequest: "SMS_130915509", // 短信通知
//   bangweiVerifyPass: "SMS_130920608" // 初审通过 ,邀请来邦为面试
// };
// var AliMNS = require("ali-mns");
// var account = new AliMNS.Account(
//   "1770567526081147",
//   accessKeyId,
//   secretAccessKey
// );
class default_1 extends egg_1.Service {
    sendSms(PhoneNumbers, SignName, TemplateCode, TemplateParam) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return smsClient.sendSMS({ PhoneNumbers, SignName, TemplateCode, TemplateParam });
        });
    }
    senAppSignupAuthcode(phone, params) {
        return this.sendSms(phone, "邦为科技", "SMS_130912877", params);
    }
    querySendDetails(PhoneNumber, BizId) {
        return smsClient.queryDetail({ PhoneNumber, BizId, PageSize: '10', CurrentPage: '0', SendDate: new Date().format('yyyy-MM-dd'), });
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL3NlcnZpY2Uvc21zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUE4QjtBQUM5Qix5RUFBeUU7QUFDekUsTUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUM7QUFDdkMsTUFBTSxlQUFlLEdBQUcsZ0NBQWdDLENBQUM7QUFLekQsK0NBQWdEO0FBRWhELGdEQUFnRDtBQUNoRCxpRUFBaUU7QUFDakUsMENBQTBDO0FBQzFDLDREQUE0RDtBQUU1RCxJQUFJLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLG9CQUFvQjtBQUNwQix1QkFBdUI7QUFDdkIsb0JBQW9CO0FBQ3BCLEtBQUs7QUFDTCx3QkFBd0I7QUFDeEIsbURBQW1EO0FBQ25ELDBDQUEwQztBQUMxQyxxREFBcUQ7QUFDckQsd0RBQXdEO0FBQ3hELEtBQUs7QUFDTCxtQ0FBbUM7QUFDbkMsb0NBQW9DO0FBQ3BDLHdCQUF3QjtBQUN4QixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLEtBQUs7QUFFTCxlQUFxQixTQUFRLGFBQU87SUFDNUIsT0FBTyxDQUFDLFlBQW9CLEVBQUUsUUFBZ0IsRUFBRSxZQUFvQixFQUFFLGFBQWE7O1lBRXZGLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFFcEYsQ0FBQztLQUFBO0lBSU0sb0JBQW9CLENBQUMsS0FBYSxFQUFFLE1BQWM7UUFDdkQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxXQUFtQixFQUFFLEtBQWE7UUFDakQsT0FBTyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNySSxDQUFDO0NBRUY7QUFoQkQsNEJBZ0JDIn0=