import { Service } from "egg";
// let enpoint = `http://1770567526081147.mns.cn-hangzhou.aliyuncs.com/`;
const accessKeyId = "LTAIcMnaxxUG7dbk";
const secretAccessKey = "VhNgQZrGYz7dXpiCUS8r36mbLgy6db";




import SMSClient = require("@alicloud/sms-sdk");

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

export default class extends Service {
  async sendSms(PhoneNumbers: string, SignName: string, TemplateCode: string, TemplateParam) {

    return smsClient.sendSMS({ PhoneNumbers, SignName, TemplateCode, TemplateParam });

  }



  public senAppSignupAuthcode(phone: string, verfyCode?: string): Promise<SendSMSResponse> {
    return this.sendSms(phone, "邦为科技", "SMS_130912877", JSON.stringify({ time: verfyCode, address: 'heheda' }));
  }
  querySendDetails(PhoneNumber: string, BizId: string) {
    return smsClient.queryDetail({ PhoneNumber, BizId, PageSize: '10', CurrentPage: '0', SendDate: new Date().format('yyyy-MM-dd'), });
  }

}
