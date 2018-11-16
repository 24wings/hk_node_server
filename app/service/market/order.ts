import { Service } from 'egg';
// import { AccRecvPay } from '../../share_platform/market/entity/account/AccRecvPay';
// import { conn } from '../../typeorm';
// import { Account } from '../../share_platform/market/entity/account/Account';
// import { Order } from '../../share_platform/market/entity/TransOrder/Order';
// import { PriceUnitEnum } from '../../share_platform/market/entity/enum/PriceUnit.enum';
// import { PriceWayEnum } from '../../share_platform/market/entity/enum/PriceWay.enum';
// import { TransFeeRule } from '../../share_platform/market/entity/common/TransFeeRule';
// import { OrderTypeEnum } from '../../share_platform/market/entity/enum/OrderType.enum';
// import { User } from '../../share_platform/framework/entity/rbac/User';
// import { MemberAccountTypeEnum } from '../../share_platform/framework/enum/MemberAccountType.enum';
// import { MemberAccount } from '../../share_platform/market/entity/member/MemberAccount';
// import { Member } from '../../share_platform/market/entity/member/Member';
// import { Market } from '../../share_platform/framework/entity/rbac/Market';
// import { RecvPaySubjectEnum } from '../../share_platform/framework/enum/RecvPaySubject.enum';
// import { decimal2Float } from '../framework/util';
// import { RecvPaySubject } from '../../share_platform/market/entity/common/RecvPaySubject';
export default class extends Service {

    // async transferAmt(fromMember: Member, toMember: Member, amt: number) {
    //     let fromMemberCashAccount = await this.getMemberAccount(fromMember, MemberAccountTypeEnum.MEMBER_CASH);
    //     let toMemberCashAccount = await this.getMemberAccount(toMember, MemberAccountTypeEnum.MEMBER_CASH);
    //     if (fromMemberCashAccount && toMemberCashAccount && amt > 0) {
    //         let orderNo = await this.service.framework.util.getTransferOrderNo(fromMemberCashAccount.mktId);

    //         let resv = await this.createAccRecvPay(fromMemberCashAccount, toMemberCashAccount, -1, orderNo + '', amt, OrderTypeEnum.TRANS);
    //         return resv;
    //     } else {
    //         throw new Error('找不到会员')
    //     }
    // }

    // async  createRecvPay(recvPay: AccRecvPay): Promise<{ status: string, msg: string, recvPay: AccRecvPay }> {
    //     recvPay = Object.assign(recvPay, new AccRecvPay());
    //     let account = await conn.getRepository(Account).findOne(recvPay.accountId);
    //     if (account) {
    //         account.availAmt -= recvPay.amount * recvPay.io;
    //         let up = await conn.getRepository(AccRecvPay).update({ id: account.id }, account);
    //         console.log(up);
    //         return { status: 'ok', msg: '成功', recvPay };
    //     } else {
    //         return { status: '404', msg: '账户不存在', recvPay }
    //     }



    // }
    // public async createAccRecvPay(currentAccount: Account, targetAccount: Account | undefined, io: number, orderNo: string, transAmt: number, orderType: OrderTypeEnum): Promise<AccRecvPay> {
    //     let accRecvPay = new AccRecvPay();
    //     accRecvPay.recvPayNo = '' + await this.service.framework.util.getNo(currentAccount.mktId + orderType)
    //     accRecvPay.accountId = currentAccount.id;
    //     accRecvPay.accountName = currentAccount.name;
    //     accRecvPay.frozenAmt = decimal2Float(currentAccount.frozenAmt);
    //     accRecvPay.subjectId = RecvPaySubjectEnum.Order;
    //     let subject = await conn.getRepository(RecvPaySubject).findOne(RecvPaySubjectEnum.Order);
    //     accRecvPay.amount = transAmt

    //     accRecvPay.subjectName = (subject as RecvPaySubject).subjectName;
    //     if (targetAccount != null) {
    //         accRecvPay.toAccountId = targetAccount.id
    //         accRecvPay.toAccountName = targetAccount.name;
    //     }
    //     if (orderType != null) {
    //         accRecvPay.orderType = OrderTypeEnum.RENTS;
    //     } else {
    //         accRecvPay.orderType = OrderTypeEnum.TRANS;
    //     }
    //     accRecvPay.orderNo = orderNo;
    //     accRecvPay.createTime = new Date();
    //     accRecvPay.mktId = currentAccount.mktId;
    //     if (io == -1) {
    //         /** 账户支出 */
    //         await this.accountMin(currentAccount, transAmt);
    //         currentAccount = await conn.getRepository(Account).findOne({ id: currentAccount.id }) as Account;
    //         accRecvPay.io = -1;
    //         accRecvPay.amount = transAmt;
    //         accRecvPay.balAmt = decimal2Float(currentAccount.balAmt) + decimal2Float(currentAccount.frozenAmt);
    //         accRecvPay.availAmt = decimal2Float(currentAccount.balAmt);

    //     } else if (io == 1) {
    //         /**  账户收入 */
    //         await this.accountAdd(currentAccount, transAmt);
    //         currentAccount = await conn.getRepository(Account).findOne({ id: currentAccount.id }) as Account;

    //         accRecvPay.io = 1;
    //         accRecvPay.amount = transAmt;
    //         accRecvPay.balAmt = currentAccount.balAmt + currentAccount.frozenAmt;
    //         accRecvPay.availAmt = currentAccount.balAmt;

    //     }

    //     let insert = await conn.getRepository(AccRecvPay).insert(accRecvPay);
    //     return conn.getRepository(AccRecvPay).findOne({ id: insert.raw.insertId }) as any;
    // }
    // async accountMin(account: Account, amt: number) {
    //     account.availAmt = decimal2Float(account.availAmt);
    //     account.balAmt = decimal2Float(account.balAmt);
    //     account.frozenAmt = decimal2Float(account.frozenAmt);


    //     account.availAmt = decimal2Float(account.availAmt);
    //     account.balAmt = decimal2Float(account.balAmt);
    //     account.availAmt -= decimal2Float(amt);
    //     account.balAmt = account.availAmt + account.frozenAmt;
    //     return conn.getRepository(Account).update({ id: account.id }, account);

    // }
    // async accountAdd(account: Account, amt: number) {
    //     account.availAmt = decimal2Float(account.availAmt);
    //     account.balAmt = decimal2Float(account.balAmt);
    //     account.frozenAmt = decimal2Float(account.frozenAmt);

    //     account.availAmt += decimal2Float(amt);
    //     account.balAmt = decimal2Float(account.availAmt) + decimal2Float(account.frozenAmt);
    //     return conn.getRepository(Account).update({ id: account.id }, account);

    // }


    // async  computeOrderFee(order: Order): Promise<Order> {
    //     order.totalWeight = 0;
    //     let rules = await conn.getRepository(TransFeeRule).find({ txnId: order.transAreaId, mktId: order.mktId, enabled: true });

    //     order.apAmt = 0;
    //     order.buyerFee = 0;
    //     order.sellerFee = 0;
    //     for (let detail of order.orderDetails) {
    //         /**  斤转公斤  统计*/
    //         let weight = detail.priceUnit == PriceUnitEnum.JIN ? detail.weight = detail.weight / 2 : detail.weight;
    //         order.totalWeight += weight;
    //         // 计重方式
    //         if (detail.priceWay == PriceWayEnum.WEIGHT) {
    //             rules.forEach(rule => {
    //                 let fee = weight * rule.feeRateWgt > rule.feeMax ? rule.feeMax : weight * rule.feeRateWgt;
    //                 rule.io == 1 ? order.sellerFee += fee : order.buyerFee += fee;
    //             });
    //             order.apAmt += detail.weight * detail.price;
    //         } else {
    //             // 计件方式
    //             rules.forEach(rule => {
    //                 let fee = detail.qty * detail.price * rule.feeRateAmt > rule.feeMax ? rule.feeMax : detail.qty * detail.price;
    //                 rule.io == 1 ? order.sellerFee += fee : order.buyerFee += fee;
    //             });
    //             order.apAmt += detail.weight * detail.price;
    //         }
    //     }
    //     order.apAmt += order.buyerFee;
    //     return order;
    // }
    // /** 工作人员来进行柜台交易 */
    // async payOrder(order: Order, user?: User): Promise<{ status: number, msg: string, order: Order, recvPays: AccRecvPay[] }> {

    //     debugger
    //     /**
    //      * 
    //      * 1.买方现金账户 
    //      * 2.卖方现金账户
    //      * */
    //     let buyerMember = await conn.getRepository(Member).findOne({ where: { id: order.buyerMemId } });
    //     let market = await conn.getRepository(Market).findOne({ where: { id: order.mktId } });
    //     let sellerMem = await conn.getRepository(Member).findOne({ where: { id: order.sellerMemId } });

    //     if (!market || !sellerMem) {
    //         return { status: 404, msg: "找不到市场或卖家", order, recvPays: [] }
    //     }

    //     let buyerCashAccount;
    //     if (buyerMember)
    //         buyerCashAccount = await this.getMemberAccount(buyerMember, MemberAccountTypeEnum.MEMBER_CASH);
    //     let marketCashAccount = await this.getMarketAccount(market, MemberAccountTypeEnum.MARKET_FEE);
    //     let sellerCashAccount = await this.getMemberAccount(sellerMem, MemberAccountTypeEnum.MEMBER_CASH);


    //     let recvPays: AccRecvPay[] = []
    //     if (marketCashAccount && sellerCashAccount) {
    //         /**
    //          * 1.市场规则费用每条规则产生两条收支 买/卖方 支付手续费用  市场账户获得手续费用
    //          */
    //         let rules = await conn.getRepository(TransFeeRule).find({ txnId: order.transAreaId, mktId: order.mktId, enabled: true });
    //         for (let rule of rules) {
    //             /** 卖方手续费收支 */
    //             if (rule.io == 1) {
    //                 let sellCashAccountRecvpay = await this.createAccRecvPay(sellerCashAccount, buyerCashAccount, -1, order.orderNo, order.sellerFee, OrderTypeEnum.TRANS);
    //                 recvPays.push(sellCashAccountRecvpay);
    //             }
    //             /** 买方手续费收支 */
    //             else {
    //                 if (buyerCashAccount) {
    //                     let buyerCashAccountRecvpay = await this.createAccRecvPay(sellerCashAccount, buyerCashAccount, -1, order.orderNo, order.buyerFee, OrderTypeEnum.TRANS);
    //                     recvPays.push(buyerCashAccountRecvpay)
    //                 }
    //             }
    //             /** 无论是否有市场账户,交易结算,市场总会有收支记录 */
    //             let marketSellerCashAccountRecvpay = await this.createAccRecvPay(marketCashAccount, sellerCashAccount, 1, order.orderNo, order.sellerFee, OrderTypeEnum.TRANS);
    //             let marketBuyerCashAccountRecvpay = await this.createAccRecvPay(marketCashAccount, buyerCashAccount, 1, order.orderNo, order.buyerFee, OrderTypeEnum.TRANS);
    //             recvPays.push(marketSellerCashAccountRecvpay);
    //             recvPays.push(marketBuyerCashAccountRecvpay);
    //         }

    //         /**
    //          * 卖方收支
    //          * 1. 卖方收入即 = 订单ap货款收入 - 卖方手续费用
    //          * 2. 卖方手续费
    //          */
    //         let sellerCashAccountRecvpay = await this.createAccRecvPay(sellerCashAccount, buyerCashAccount, 1, order.orderNo, order.apAmt - order.sellerFee, OrderTypeEnum.TRANS);
    //         recvPays.push(sellerCashAccountRecvpay);
    //         /**手续费 */
    //         if (order.sellerFee > 0) {
    //             let sellerCashAccountFeeRecvpay = await this.createAccRecvPay(sellerCashAccount, buyerCashAccount, -1, order.orderNo, order.sellerFee, OrderTypeEnum.TRANS);
    //             recvPays.push(sellerCashAccountFeeRecvpay);
    //         }
    //         /** 
    //          * 
    //          * 有买方现金账户 
    //          * 买方账户收支
    //         */
    //         if (buyerCashAccount) {
    //             /** 买方支出 */
    //             let buyerCashAccountRecvpay = await this.createAccRecvPay(buyerCashAccount, sellerCashAccount, -1, order.orderNo, order.apAmt - order.buyerFee, OrderTypeEnum.TRANS);
    //             recvPays.push(buyerCashAccountRecvpay);
    //             /**手续费 */
    //             if (order.buyerFee > 0) {
    //                 let buyerCashAccountFeeRecvpay = await this.createAccRecvPay(buyerCashAccount, sellerCashAccount, -1, order.orderNo, order.buyerFee, OrderTypeEnum.TRANS);
    //                 recvPays.push(buyerCashAccountFeeRecvpay);
    //             }
    //         }
    //         /** 员工账户 */
    //         if (user) {
    //             let userAccount = await this.getUserAccount(user, MemberAccountTypeEnum.USER_CASH);
    //             if (userAccount) {
    //                 /** 员工收取买方交易金额 */
    //                 let userOrderRecvpay = await this.createAccRecvPay(userAccount, buyerCashAccount, 1, order.orderNo, order.payAmt, OrderTypeEnum.TRANS);
    //                 recvPays.push(userOrderRecvpay);

    //             }


    //         }

    //         return { status: 200, msg: '成功', order, recvPays };
    //     } else {
    //         return { status: 404, msg: '找不到市场现金账户或卖方现金账户', order, recvPays: [] }
    //     }
    // }



    // async getMemberAccount(member: Member, accountType: MemberAccountTypeEnum.MEMBER_CASH | MemberAccountTypeEnum.MEMBER_SCORE) {
    //     let memberAccount = await conn.getRepository(MemberAccount).findOne({ accountType, memberId: member.id });
    //     if (memberAccount) {
    //         return conn.getRepository(Account).findOne({ no: memberAccount.accountNo });
    //     } else {
    //         let accountNo = await this.service.framework.util.getNo(member.mktId + accountType == MemberAccountTypeEnum.MEMBER_CASH ? "MEMBER_CASH" : "MEMBER_SCORE")
    //         let insertAccount = await conn.getRepository(Account).save(Object.assign(new Account(), { no: accountNo + '', accountType, name: member.name, mktId: member.mktId }))
    //         memberAccount = Object.assign({ memberId: member.id, accountType, accountNo: accountNo + '', mktId: member.mktId }, new MemberAccount());

    //         await conn.getRepository(MemberAccount).save(memberAccount);
    //         return insertAccount;
    //     }
    // }
    // async getMarketAccount(market: Market, accountType: MemberAccountTypeEnum.MARKET_FEE | MemberAccountTypeEnum.MARKET_MS) {
    //     let marketMemberAccount = await conn.getRepository(MemberAccount).findOne({ accountType, relationId: market.mktId });
    //     if (marketMemberAccount) {
    //         return conn.getRepository(Account).findOne({ no: marketMemberAccount.accountNo });
    //     } else {
    //         let accountNo = await this.service.framework.util.getNo(market.mktId + accountType == MemberAccountTypeEnum.MARKET_FEE ? "MARKET_FEE" : "MARKET_MS")
    //         let insertAccount = await conn.getRepository(Account).save(Object.assign(new Account(), { no: accountNo + '', accountType, name: market.mktName, mktId: market.mktId }))
    //         marketMemberAccount = Object.assign({ name: market.mktName, relationId: market.mktId, accountType, accountNo: accountNo + '', memberId: 0 }, new MemberAccount());
    //         await conn.getRepository(MemberAccount).save(marketMemberAccount);
    //         return insertAccount;

    //     }
    // }
    // async getUserAccount(user: User, accountType: MemberAccountTypeEnum.USER_CASH) {
    //     let userMemberAccount = await conn.getRepository(MemberAccount).findOne({ accountType, relationId: user.id });
    //     if (userMemberAccount) {
    //         return conn.getRepository(Account).findOne({ no: userMemberAccount.accountNo });
    //     } else {
    //         let accountNo = await this.service.framework.util.getNo(user.mktId + "USER_CASH")
    //         let insertAccount = await conn.getRepository(Account).insert(Object.assign(new Account(), { no: accountNo + '', accountType, name: user.name, mktId: user.mktId }));
    //         userMemberAccount = Object.assign({ name: user.name, relationId: user.id, accountType, accountNo: accountNo + '', memberId: 0 }, new MemberAccount());
    //         await conn.getRepository(MemberAccount).insert(userMemberAccount);
    //         return conn.getTreeRepository(Account).findOne(insertAccount.raw.insertId);
    //     }
    // }

}