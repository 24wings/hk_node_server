"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const egg_1 = require("egg");
const db = require("../../model");
const MetaField_1 = require("../../share_platform/framework/entity/rbac/MetaField");
const MetaObject_1 = require("../../share_platform/framework/entity/rbac/MetaObject");
console.log(db);
class default_1 extends egg_1.Controller {
    constructor() {
        super(...arguments);
        this.entityManager = db.conn.manager;
        // async findByMobi() {
        //     let { mktId, mobi } = this.ctx.query;
        //     let customer = await db.Customer.findOne({ mobi, mktId });
        //     this.ctx.body = { ok: true, data: customer }
        // }
        // // get
        // async  gerCards() {
        //     let { customerId } = this.ctx.query
        //     let customer = await db.Customer.findOne({ customerId });
        //     this.ctx.body = { ok: true, data: customer }
        // }
        // async customerCreate() {
        //     let newCustomer: Customer = this.ctx.body;
        //     let exist = await db.Customer.find({ mktId: newCustomer.mktId, mobi: newCustomer.mobi });
        //     if (!exist) newCustomer = await db.Customer.save(newCustomer);
        //     else {
        //         this.ctx.body = { ok: false, data: exist, msg: '该手机已经被注册' };
        //     }
        // }
        // // post 
        // async relationCard() {
        //     let { customer, card } = this.ctx.request.body;
        //     await this.service.customer.relationCard(customer, card);
        //     this.ctx.body = { ok: true, data: { customer, card } };
        // }
        // async changeCardStatus() {
        //     let { cardId, status } = this.ctx.request.body;
        //     let card = await db.Card.findOne({ cardId });
        //     if (card) {
        //         card.status = status;
        //         await card.save()
        //         this.ctx.body = { ok: true, data: card, };
        //     } else {
        //         this.ctx.body = { ok: false, }
        //     }
        // }
        // async findByCardNo() {
        //     let card = await db.Card.find({ cardNo: this.ctx.query.cardNo });
        //     if (card) {
        //         this.ctx.body = { ok: true, data: card };
        //     } else {
        //         this.ctx.body = { ok: false, msg: '卡号不存在' };
        //     }
        // }
        // // post
        // async memberRealnameAuthCreate() {
        //     let authcode = this.ctx.query.authcode;
        //     let newMemberRealnameAuth: MemberRealnameAuth = this.ctx.request.body;
        //     if (newMemberRealnameAuth.mobi) {
        //         let msg = await this.ctx.service.msg.getMarketPhoneLastAuthcode(newMemberRealnameAuth.mobi, newMemberRealnameAuth.mktId);
        //         if (msg) {
        //             if (msg.addtion == authcode) {
        //                 let exisitCustomer = await db.Customer.findOne({ mobi: newMemberRealnameAuth.mobi });
        //                 if (exisitCustomer) {
        //                     let existProcessAuth = await db.MemberRealnameAuth.findOne({
        //                         mktId: exisitCustomer.mktId,
        //                         customerId: exisitCustomer.customerId, status: MemberRealnameAuthStatusEnum.Processing
        //                     });
        //                     if (existProcessAuth) {
        //                         this.ctx.body = { ok: false, data: '', msg: '用户已经在认证' };
        //                     } else {
        //                         let res = await db.MemberRealnameAuth.save(newMemberRealnameAuth);
        //                         this.ctx.body = { ok: true, data: res };
        //                     }
        //                 } else {
        //                     return this.ctx.body = { ok: true, data: '用户不存在,无法开通会员', }
        //                 }
        //             }
        //         } else {
        //             return this.ctx.body = { ok: true, data: {} };
        //         }
        //     }
        // }
        // async listEmployee() {
        //     let msgList = await db.Msg.find();
        //     this.ctx.body = { ok: true, data: msgList };
        // }
        // // get
        // async  memberDetail() {
        //     let { customerId } = this.ctx.query
        //     let customer = await db.Customer.findOne({ customerId });
        //     if (customer) {
        //         if (!customer.member) {
        //             let existProcessAuth = await db.MemberRealnameAuth.findOne({
        //                 mktId: customer.mktId,
        //                 customerId: customer.customerId, status: MemberRealnameAuthStatusEnum.Processing
        //             });
        //             if (!existProcessAuth) {
        //                 this.ctx.body = { ok: true, data: { auth: existProcessAuth, status: 'realnameAuth' }, }
        //             } else {
        //                 this.ctx.body = { ok: true, data: { status: 'noner' } }
        //             }
        //         } else {
        //             this.ctx.body = { ok: true, data: { status: 'member', member: customer.member }, msg: '已经是会员' }
        //         }
        //     }
        // }
        // // post
        // async  checkAuthcode() {
        //     let { authcode, phone, mktId } = this.ctx.request.body;
        //     let msg = await db.Msg.findOne({ phone, mktId, }, { order: { sendTime: 'DESC' } });
        //     if (msg) {
        //         if (msg.addtion == authcode) {
        //             return this.ctx.body = { ok: true, data: msg };
        //         } else {
        //             return this.ctx.body = { ok: false, data: '验证码错误' }
        //         }
        //     } else {
        //         return this.ctx.body = { ok: false, data: '', msg: '请先发送短信' };
        //     }
        // }
        // // post
        // async  forgotPassword() {
        //     let customer: Customer = this.ctx.requst.body;
        //     let { authcode } = this.ctx.query;
        //     let msg = await db.Msg.findOne({ phone: customer.mobi, mktId: customer.mktId });
        //     if (msg != null) {
        //         if (msg.addtion == authcode) {
        //             let existCustomer = await db.Customer.findOne({ mktId: customer.mktId, mobi: customer.mobi });
        //             if (existCustomer) {
        //                 existCustomer.password = customer.password;
        //                 db.Customer.update(existCustomer, { customerId: existCustomer.customerId });
        //             }
        //         } else {
        //             this.ctx.body = { ok: false, data: '', msg: '验证码错误' }
        //         }
        //     } else {
        //         this.ctx.body = { ok: false, msg: '请先发送短信' }
        //     }
        // }
        // // get ?mktid&phone
        // async sendAuthcode() {
        //     let { mktId, phone } = this.ctx.query;
        //     let msgRes = await this.service.msg.sendAppAuthcode(phone, mktId);
        //     if (msgRes) {
        //         if (msgRes.Code.toLocaleLowerCase() == 'ok') {
        //             this.ctx.body = { ok: true, status: 200, data: 'ok', }
        //         } else {
        //             this.ctx.body = { ok: false, status: 500, data: msgRes, }
        //         }
        //     } else {
        //         this.ctx.body = { ok: false, msg: '发送失败' }
        //     }
        // }
        // /** 
        //  * post
        // */
        // async  singup() {
        //     let newCustomer: Customer = this.ctx.request.body;
        //     let { authcode } = this.ctx.query;
        //     let exsitCustomer = await db.Customer.findOne({ mktId: newCustomer.mktId, mobi: newCustomer.mobi });
        //     if (exsitCustomer) {
        //         this.ctx.body = { ok: false, status: 400, msg: '手机号已经被注册' }
        //     } else {
        //         let msg = await this.service.msg.getMarketPhoneLastAuthcode(newCustomer.mobi, newCustomer.mktId);
        //         if (msg) {
        //             if (msg.addtion == authcode) {
        //                 newCustomer = await db.Customer.save(newCustomer);
        //                 this.ctx.body = { ok: true, data: newCustomer, msg: '注册成功' };
        //             } else {
        //                 this.ctx.body = { ok: false, data: newCustomer, msg: '验证码错误' }
        //             }
        //         } else {
        //             this.ctx.body = { ok: false, status: 400, msg: '请先发送短信' };
        //         }
        //     }
        // }
        // // get
        // async  listMarket() {
        //     let markets = await db.Market.find();
        //     this.ctx.body = { ok: true, data: markets, status: 200 }
        // }
        // // get
        // async  feelistAll() {
        //     let { mktId } = this.ctx.query;
        //     let feelists = db.Feelist.find({ mktId });
        //     this.ctx.body = { ok: true, data: feelists };
        // }
        // //  post
        // async  signin() {
        //     let loginCustomer: Customer = this.ctx.request.body;
        //     let customer = await db.Customer.findOne({ mktId: loginCustomer.mktId, mobi: loginCustomer.mobi });
        //     if (customer) {
        //         if (customer.password == loginCustomer.password) {
        //             this.ctx.body = { ok: true, data: { customer } }
        //         } else {
        //             this.ctx.body = { ok: false, data: '', msg: '密码错误' }
        //         }
        //     } else {
        //         this.ctx.body = { ok: false, data: '', msg: '手机用户不存在' };
        //     }
        // }
    }
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let field = new MetaField_1.MetaField();
            let metaObject = new MetaObject_1.MetaObject();
            // field = await this.entityManager.save(field);
            metaObject.metaFields = [field];
            let entity = yield this.entityManager.save(metaObject);
            this.ctx.body = { data: entity };
        });
    }
    listObjects() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.ctx.body = yield this.entityManager.find(MetaObject_1.MetaObject, { relations: ["metaFields"] });
        });
    }
    listObjectFields() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.ctx.body = yield this.entityManager.find(MetaField_1.MetaField, { relations: ["metaObject"] });
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL2NvbnRyb2xsZXIvZnJhbWV3b3JrL21hcmtldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBaUM7QUFDakMsa0NBQW1DO0FBQ25DLG9GQUFpRjtBQUNqRixzRkFBbUY7QUFDbkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUdoQixlQUFxQixTQUFRLGdCQUFVO0lBQXZDOztRQUNJLGtCQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFtQmhDLHVCQUF1QjtRQUN2Qiw0Q0FBNEM7UUFDNUMsaUVBQWlFO1FBQ2pFLG1EQUFtRDtRQUNuRCxJQUFJO1FBQ0osU0FBUztRQUNULHNCQUFzQjtRQUN0QiwwQ0FBMEM7UUFDMUMsZ0VBQWdFO1FBQ2hFLG1EQUFtRDtRQUNuRCxJQUFJO1FBR0osMkJBQTJCO1FBQzNCLGlEQUFpRDtRQUNqRCxnR0FBZ0c7UUFDaEcscUVBQXFFO1FBQ3JFLGFBQWE7UUFDYix1RUFBdUU7UUFDdkUsUUFBUTtRQUNSLElBQUk7UUFFSixXQUFXO1FBQ1gseUJBQXlCO1FBQ3pCLHNEQUFzRDtRQUN0RCxnRUFBZ0U7UUFDaEUsOERBQThEO1FBQzlELElBQUk7UUFHSiw2QkFBNkI7UUFDN0Isc0RBQXNEO1FBQ3RELG9EQUFvRDtRQUNwRCxrQkFBa0I7UUFDbEIsZ0NBQWdDO1FBQ2hDLDRCQUE0QjtRQUM1QixxREFBcUQ7UUFDckQsZUFBZTtRQUNmLHlDQUF5QztRQUN6QyxRQUFRO1FBRVIsSUFBSTtRQUVKLHlCQUF5QjtRQUN6Qix3RUFBd0U7UUFDeEUsa0JBQWtCO1FBQ2xCLG9EQUFvRDtRQUNwRCxlQUFlO1FBQ2YsdURBQXVEO1FBQ3ZELFFBQVE7UUFFUixJQUFJO1FBRUosVUFBVTtRQUNWLHFDQUFxQztRQUNyQyw4Q0FBOEM7UUFDOUMsNkVBQTZFO1FBQzdFLHdDQUF3QztRQUN4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