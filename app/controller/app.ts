import { Controller } from "egg";
import { bp } from 'egg-blueprint';
import { success } from '../share_platform/framework/util/res/success';
import { conn } from '../typeorm';
import { Customer } from '../share_platform/market/entity/member/Customer';
import { err } from '../share_platform/framework/util/res/err';
import { SMSLog } from '../share_platform/market/entity/common/SMSLog';
import { Member } from '../share_platform/market/entity/member/Member';
import { AppMsgNotify } from '../share_platform/market/entity/common/AppMsgNotify';
import { MemberInvite } from '../share_platform/market/entity/member/MemberInvite';
// import { Order } from '../share_platform/market/entity/TransOrder/Order';
import { TransArea } from '../share_platform/market/entity/common/TransArea';
import { ProdCatalog } from '../share_platform/market/entity/common/ProdCatalog';
import { Product } from '../share_platform/market/entity/common/Product';
import { ProductStatusEnum } from '../share_platform/framework/enum/product_status.enum';
import { Order } from '../share_platform/market/entity/TransOrder/Order';
// import { MemberAccountTypeEnum } from '../share_platform/framework/enum/MemberAccountType.enum';
import { ContactInvite } from '../share_platform/market/entity/member/ContactInvite';
import _ = require('lodash');
import { MemberInviteStatusEnum } from '../share_platform/market/entity/enum/MemberInviteStatus.enum';
// import { decimal2Float } from '../service/framework/util';
// import { AccRecvPay } from '../share_platform/market/entity/account/AccRecvPay';
// import { Account } from '../share_platform/market/entity/account/Account';
// import { QcodeBizTypeEnum } from '../share_platform/market/entity/enum/QcodeBizType.enum';
// import { atob } from '../share_platform/framework/util/atob';

export default class extends Controller {

    @bp.get('/app/order/queryOrderStatus')
    async  queryOrderByStatus() {
        let data = await conn.getRepository(Order).findOne({ orderNo: this.ctx.query.orderNo });
        this.ctx.body = success({ order: data });
    }
    // @bp.get('/app/member/recvpayListBymemberId')
    // async recvpayListByMemberId() {
    //     let { memberId } = this.ctx.query;
    //     let member = await conn.getRepository(Member).findOne(memberId);
    //     if (member) {
    //         let memberCashAccount = await this.service.market.order.getMemberAccount(member, MemberAccountTypeEnum.MEMBER_CASH) as Account;
    //         let accRecvPayList = await conn.getRepository(AccRecvPay).find({ accountId: memberCashAccount.id });
    //         this.ctx.body = success({ accRecvPayList });
    //     } else {
    //         this.ctx.body = err(400, '会员不存在');
    //     }
    // }

    // @bp.get('/app/member/transferAccount')
    // async transferAccount() {
    //     let { memberId, tomemberId, transferAmount } = this.ctx.query;
    //     let fromMember = await conn.getRepository(Member).findOne(memberId);
    //     let toMember = await conn.getRepository(Member).findOne(tomemberId);
    //     let amt = decimal2Float(transferAmount);
    //     if (fromMember && toMember && amt > 0) {
    //         let result = await this.service.market.order.transferAmt(fromMember, toMember, amt);
    //         this.ctx.body = success({ result });
    //     } else {
    //         this.ctx.body = err(400, '参数不合法');
    //     }
    // }
    @bp.get('/app/member/modifyPayPassword')
    async  modifyPayPassword() {
        let { memberId, newPayPasswoord, } = this.ctx.query;

        let member = await conn.getRepository(Member).findOne(memberId);
        if (member) {
            let passwordJwt = this.service.framework.jwt.sign({ id: member.id, payPassword: newPayPasswoord });
            await conn.getRepository(Member).update({ id: memberId }, { payPassword: passwordJwt });
            this.ctx.body = success({ member });
        } else {
            this.ctx.body = err(404, '会员找不到')
        }
    }
    /** 在线转账 支付密码 */
    @bp.get('/app/member/confirePayPassword')
    async confirmPaypassword() {
        let { memberId, payPassword } = this.ctx.query;
        let member = await conn.getRepository(Member).findOne(memberId)
        if (member) {
            let payPasswordJson = this.ctx.service.framework.jwt.verifyIgnoreExpiration(member.payPassword) as Member;
            debugger
            if (payPasswordJson.payPassword == payPassword) {
                this.ctx.body = success({ member })
            } else {
                this.ctx.body = err(400, '支付密码错误');
            }
        } else {
            this.ctx.body = err(400, '消息错误');
        }
    }
    @bp.post('/app/member/Inviprocess')
    async inviprocess() {
        let contactInvite: ContactInvite = this.ctx.request.body;
        let { status } = contactInvite;
        if (status == MemberInviteStatusEnum.Agree) {
            let contact = await conn.getRepository(ContactInvite).findOne(contactInvite.id);
            if (contact) {
                if (contact.status == MemberInviteStatusEnum.Active) {
                    let member = await conn.getRepository(Member).findOne({ id: contact.memberId });
                    let recvMember = await conn.getRepository(Member).findOne(contact.friendinvitemId);
                    if (member && recvMember) {
                        member.friendIds = member.friendIds.split(',').filter(id => id).map(id => typeof id == 'string' ? parseInt(id) : id).concat([contact.friendinvitemId]).join(',');
                        recvMember.friendIds = recvMember.friendIds.split(',').filter(id => id).map(id => typeof id == 'string' ? parseInt(id) : id).concat([contact.friendinvitemId]).join(',');
                        let up = await conn.getRepository(Member).update({ id: member.id }, { friendIds: member.friendIds });
                        let up2 = await conn.getRepository(Member).update({ id: recvMember.id }, { friendIds: recvMember.friendIds });
                        let inviteup = await conn.getRepository(ContactInvite).update({ id: contact.id }, { status: MemberInviteStatusEnum.Agree });
                        this.ctx.body = success({ up, inviteup, up2 });
                    } else {
                        this.ctx.body = err(400, "会员不存在")
                    }
                } else {
                    this.ctx.body = err(400, '邀请状态异常');
                }
            } else {
                this.ctx.body = err(400, '邀请记录不存在')
            }
        } else if (status == MemberInviteStatusEnum.Refuse) {
            this.ctx.body = success({});
        } else {
            this.ctx.body = err(400, '异常');
        }
    }
    @bp.get('/app/member/friendInvi')
    async  friendInvi() {
        // ?memberId=9&friendId=10&content=
        let { memberId, friendId, content } = this.ctx.query;
        let member = await conn.getRepository(Member).findOne(memberId)
        let friend = await conn.getRepository(Member).findOne(friendId);
        if (member && friend) {
            let contact = Object.assign({
                content,
                memberId,
                friendinvitemId: friendId,
                memberName: member.name,
                friendinvitemName: friend.name,
                mktId: member.mktId,
            } as ContactInvite, new ContactInvite());
            contact = await conn.getRepository(ContactInvite).save(contact);
            this.ctx.body = success({ contact });
        } else {
            this.ctx.body = err(404, '邀请方或被邀请方不存在');
        }
    }
    @bp.get('/app/member/searchMember')
    async searchMember() {
        let { keyWord } = this.ctx.query;
        /** 1. 会员 */
        let nameLikeMembers = await conn.getRepository(Member)
            .createQueryBuilder('member')
            .where(`member.name like :keyWord`, { keyWord: '%' + keyWord + '%' })
            .getMany();
        /** 2. 匹配相近的会员   */
        let customers = await conn.getRepository(Customer)
            .createQueryBuilder('customer')
            .where(`customer.mobi like :keyWord`, { keyWord: '%' + keyWord + '%' })
            .getMany();
        let memberIds = _.uniq(customers.map(customer => customer.id));
        let members = await conn.getRepository(Member).findByIds(memberIds);
        let totalMember = nameLikeMembers.concat(members)
        let totalMemberIds = totalMember.map(m => m.id);
        totalMember = _.uniq(totalMemberIds).map(id => totalMember.find(m => m.id == id) as Member).filter(m => m != undefined);
        this.ctx.body = success({ member: totalMember });
        // await conn.createQueryBuilder(Member,'member').where(`id in (:memberIds)`,{});
    }
    @bp.get('/app/member/InviList')
    async  inviteList() {
        let { memberId, type } = this.ctx.query;
        let contactInvites: ContactInvite[] = [];
        if (type == 'send') {
            contactInvites = await conn.getRepository(ContactInvite).find({ where: { memberId, } });
        } else {
            contactInvites = await conn.getRepository(ContactInvite).find({ where: { friendinvitemId: memberId, } });

        }
        this.ctx.body = success({ contactInvite: contactInvites });
    }
    @bp.get('/app/member/friendLists')
    async friendList() {
        let member = await conn.getRepository(Member).findOne({ id: this.ctx.query.memberId });
        if (member) {
            let friends = await conn.getRepository(Member).findByIds(member.friendIds ? member.friendIds.split(',').filter(id => id) : []);
            this.ctx.body = success({ member: friends });
        } else {
            this.ctx.body = err(404, '会员找不到');
        }
    }

    // /**现金账户 */
    // @bp.get('/app/member/accountDetail')
    // async accountDetail() {
    //     let member = await conn.getRepository(Member).findOne({ id: this.ctx.query.memberId });
    //     if (member) {
    //         let cashAccount = await this.service.market.order.getMemberAccount(member, MemberAccountTypeEnum.MEMBER_CASH);
    //         debugger;
    //         member.account = cashAccount as any;
    //         debugger;
    //         this.ctx.body = success({ account: cashAccount })
    //     } else {
    //         this.ctx.body = err(404, '会员不存在');
    //     }

    // }
    @bp.get('/api/order/getOrderInfo')
    async getOrderInfo() {
        let { catCode, mktId } = this.ctx.query;
        let cate = await conn.getRepository(ProdCatalog).findOne({ catCode, mktId });
        this.ctx.body = success({ cate });
    }
    // @bp.post('/app/order/orderCreate')
    // async  orderCreate() {
    //     let order: Order = this.ctx.request.body;
    //     let orderNo = await this.service.framework.util.getTransferOrderNo(order.mktId);
    //     order = Object.assign(new Order(), order, { orderNo });
    //     order = await this.service.market.order.computeOrderFee(order);
    //     order = await conn.getRepository(Order).save(order);
    //     let str = order.orderNo + "," + QcodeBizTypeEnum.TRANS_PAY
    //     let qCodeBase64Str = atob(str)

    //     this.ctx.body = success({ order, qCodeBase64Str, qcodeBizType: QcodeBizTypeEnum.TRANS_PAY, orderNo: order.orderNo });
    // }


    @bp.post('/app/order/product/update')
    async productUpdate() {
        let prod: Product = this.ctx.request.body
        delete prod.prodCat
        // let p = await conn.getRepository(Product).findOne({ where: { id: prod.id } });
        // prod = Object.assign(prod, p);
        let up = await conn.getRepository(Product).update({ id: prod.id }, prod);
        this.ctx.body = success({ up });
    }
    @bp.get('/app/order/product/list-by-status')
    async productListByStatus() {
        let { status, mktId, memberId } = this.ctx.query;
        if (status == 'Active') {
            status = ProductStatusEnum.Online;
        } else if (status == 'Del') {
            status = ProductStatusEnum.Offline
        }
        if (status) {
            let products = await conn.getRepository(Product).find({
                where: {
                    status, mktId, memberId
                }
            });
            for (let prod of products) {
                prod.prodCat = await conn.getRepository(ProdCatalog).findOne({ where: { id: prod.prodCatId } });
            }
            this.ctx.body = success({ products });
        } else {
            let products = await conn.getRepository(Product).find({ where: { mktId, memberId } });
            for (let prod of products) {
                prod.prodCat = await conn.getRepository(ProdCatalog).findOne({ where: { id: prod.prodCatId } });
            }
            this.ctx.body = success({ products });
        }



    }
    @bp.post('/app/order/product/create')
    async prodCreate() {
        let newProd: Product = this.ctx.request.body;
        newProd = Object.assign(new Product(), newProd);
        let cat = await conn.getRepository(ProdCatalog).findOne({ id: newProd.prodCatId });
        // newProd.boundFlight
        if (cat) {
            // newProd.catName = cat.catName;
            // newProd.catCode = cat.catCode;
            let prod = await conn.getRepository(Product).insert(newProd);
            if (prod) {
                this.ctx.body = success({ prod });
            } else {
                this.ctx.body = err(400, '找不到产品');
            }
        } else {
            this.ctx.body = err(400, '商品分类不存在');
        }

    }
    @bp.get('/app/order/productCat/list')
    async prodcatlist() {
        let { txnId, parentId, mktId } = this.ctx.query;
        let productCatas = await conn.getRepository(ProdCatalog).find({ where: { txnId, parentId, mktId } });
        this.ctx.body = success({ productCatas });
    }
    @bp.get('/app/order/txn/list')
    async txnlist() {
        let areas = await conn.getRepository(TransArea).find();
        this.ctx.body = success({ areas });
    }
    // 会员详情
    @bp.get("/app/order/list")
    async orderlist() {
        let products = await conn.getRepository(Product).find({ memberId: this.ctx.query.memberId, mktId: this.ctx.query.mktId });
        for (let prod of products) {
            prod.prodCat = await conn.getRepository(ProdCatalog).findOne({ where: { id: prod.prodCatId } });
        }
        this.ctx.body = success({ products });
    }

    // 会员发出的邀请
    @bp.get('/app/team/invitelog-list')
    async invitelogList() {
        let { memberId } = this.ctx.query;
        let memberInvites = await conn.getRepository(MemberInvite).find({ memberId })
        this.ctx.body = success({ memberInvites });
    }
    @bp.get('/app/team/search-customer-by-phone')
    async searchCustomerByPhone() {
        let customer = await conn.getRepository(Customer).findOne({ mobi: this.ctx.query.phone });
        this.ctx.body = success({ customer });
    }
    @bp.get('/app/team/list')
    async   teamList() {
        let { memberId, mktId } = this.ctx.query;
        let customers = await conn.getRepository(Customer).find({ memberId, mktId });
        this.ctx.body = success({ customers })
    }
    @bp.get('/app/customer/modifyPassword')
    async modifyPassword() {
        let { oldPassword, newPassword, customerId } = this.ctx.query;
        let customer = await conn.getRepository(Customer).findOne({ id: customerId });
        if (customer) {
            let passwordJSON = await this.service.framework.jwt.verifyIgnoreExpiration(customer.password) as Customer;
            if (passwordJSON.password == oldPassword) {
                customer.password = this.service.framework.jwt.sign({ password: newPassword });
                let up = await conn.getRepository(Customer).update({ id: customerId }, customer)
                this.ctx.body = success({ up })
            } else {
                this.ctx.body = err(400, '密码错误');
            }
        } else {
            this.ctx.body = err(400, '找不到用户');
        }
    }
    @bp.post('/app/customer/message/manage')
    async newMessageSetting() {
        let { customerId } = this.ctx.query;
        let { newMsgSetting } = this.ctx.request.body;
        let customer = await conn.getRepository(Customer).findOne({ where: { id: customerId } });
        if (customer) {
            customer.disabledMsgTypes = newMsgSetting;
            let up = await conn.getRepository(Customer).update({ id: customerId }, customer);
            this.ctx.body = success({ up });
        } else {
            this.ctx.body = err(400, '找不到用户')
        }
    }
    @bp.get('/app/customer/message/query')
    async  messageQuery() {
        let { customerId, messageTypes } = this.ctx.query;
        if (messageTypes) {
            //  ?customerId = 2 & messageTypes=TOBE_PAY
            let msgList = await conn.createQueryBuilder(AppMsgNotify, 'msg').where('msg.custId = :custId and msgType IN (:msgTypes)', {
                custId: customerId, msgTypes: messageTypes.split(',')
            }).getMany();
            this.ctx.body = success({ data: { msgList } });
        } else {
            let msgList = await conn.getRepository(AppMsgNotify).find({ custId: customerId, isRead: true });
            this.ctx.body = success({ msgList });
        }
    }


    @bp.get('/app/member/memberDetail')
    async memberDetail() {
        let { memberId, mktId } = this.ctx.query;
        let member = await conn.getRepository(Member).findOne({ id: memberId, mktId });
        if (member) {
            this.ctx.body = success({ member });
        } else {
            this.ctx.body = err(404, '会员不存在');
        }
    }
    @bp.post('/app/customer/forgot-password')
    async  forgotPassword() {
        let { authcode } = this.ctx.query;
        let { mktId,
            mobi,
            password } = this.ctx.request.body;
        let sms = await conn.getRepository(SMSLog).findOne({ where: { mktId, mobi }, order: { createTime: 'DESC' } });
        if (sms) {
            if (sms.verifyCode == authcode) {
                let customer = await conn.getRepository(Customer).findOne({ mobi, mktId });
                if (customer) {
                    customer.password = this.service.framework.jwt.sign({ password });
                    let up = await conn.getRepository(Customer).update({ id: customer.id }, customer);
                    this.ctx.body = success({ up })
                }
            } else {
                this.ctx.body = err(400, '验证码错误');
            }

        } else {
            this.ctx.body = err(400, '请先发送短信');
        }
    }
    @bp.post('/customer/signup')
    async customerSignup() {
        let { authcode } = this.ctx.query;
        let newCustomer: Customer = this.ctx.request.body;
        let sms = await conn.getRepository(SMSLog).findOne({ mktId: newCustomer.mktId, mobi: newCustomer.mobi });
        if (sms) {
            if (sms.verifyCode == authcode) {
                let exsitCustomer = await conn.getRepository(Customer).findOne({ mktId: newCustomer.mktId, mobi: newCustomer.mobi });
                if (!exsitCustomer) {
                    let customer = await conn.getRepository(Customer).insert(newCustomer);
                    this.ctx.body = success({ customer });
                } else {
                    this.ctx.body = err(400, '手机已被注册');
                }
            } else {
                this.ctx.body = err(400, '验证码错误');
            }
        } else {
            this.ctx.body = err(400, '请先发送短信')
        }

    }

    @bp.get('/app/common/check-authcode')
    async checkAuthcode() {
        let { phone, authcode, mktId, verifyType } = this.ctx.query;
        let sms = await conn.getRepository(SMSLog).findOne({ where: { mobi: phone, mktId, verifyType }, order: { createTime: 'DESC' } });
        if (sms) {
            this.ctx.body = sms.verifyCode == authcode ? success({}) : err(400, '验证码错误');
        } else {
            this.ctx.body = err(400, '请先发送短信');
        }
    }
    @bp.post('/customer/login')
    async  customerLogin() {
        let { mktId, password, userName } = this.ctx.request.body;
        let customer = await conn.getRepository(Customer).findOne({ mktId, mobi: userName })
        if (customer) {
            let { password: pwd } = this.service.framework.jwt.verifyIgnoreExpiration(customer.password) as Customer;
            if (pwd == password) {
                this.ctx.body = success({ customer })
            } else {
                this.ctx.body = err(404, '密码错误');
            }
        } else {
            this.ctx.body = err(404, '用户尚未注册');
        }
    }
    @bp.post('/app/stq/entity/query')
    async stqQuery() {
        let { className } = this.ctx.query;
        // className = '/share_platform/' + (className as string).replace('com.fastsun.', '').replace(/\./g, '/');
        let paging = await this.service.framework.stq.findPagedEntity(this.ctx.request.body, className);
        this.ctx.body = success({ result: { rows: paging } });
    }
}