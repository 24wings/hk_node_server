import { Controller } from "egg";
import { bp } from 'egg-blueprint';
import { success } from '../../share_platform/framework/util/res/success';
import { conn } from '../../typeorm';
import { User } from '../../share_platform/framework/entity/rbac/User';
import { err } from '../../share_platform/framework/util/res/err';
import { Menu } from '../../share_platform/framework/entity/rbac/Menu';
import { RecvPaySubject } from '../../share_platform/market/entity/common/RecvPaySubject';
import { Params } from '../../share_platform/framework/entity/sysConfig/Params';
import { Member } from '../../share_platform/market/entity/member/Member';
import { Customer } from '../../share_platform/market/entity/member/Customer';
// import { CreateWayEnum } from '../../share_platform/market/entity/enum/CreateWay.enum';
import { CustomerStatusEnum } from '../../share_platform/market/entity/enum/CustomerStatus.enum';
import { FeeList } from '../../share_platform/market/entity/synthesizeFee/FeeList';
import { TransArea } from '../../share_platform/market/entity/common/TransArea';
import { ProdCatalog } from '../../share_platform/market/entity/common/ProdCatalog';
import { MetaObject } from '../../share_platform/framework/entity/rbac/MetaObject';
// import { connection } from '../../mysql';
import { MetaField } from '../../share_platform/framework/entity/rbac/MetaField';
import { CustCard } from '../../share_platform/market/entity/member/CustCard';
import { TransFeeRule } from '../../share_platform/market/entity/common/TransFeeRule';
import { QueryParam } from '../../share_platform/framework/util/metadata/QueryParam';
import { Account } from '../../share_platform/market/entity/account/Account';
import { MemberAccountTypeEnum } from '../../share_platform/framework/enum/MemberAccountType.enum';
import { MemberAccount } from '../../share_platform/market/entity/member/MemberAccount';
// import { Order } from '../../share_platform/market/entity/TransOrder/Order';
// import { OrderDetail } from '../../share_platform/market/entity/TransOrder/OrderDetail';
import { decimal2Float } from '../../service/framework/util';
// import { RechargeWithDraw } from '../../share_platform/market/entity/member/RechargeWithDraw';
// import { BussinessTypeEnum } from '../../share_platform/framework/enum/BusinessType.enum';
// import { OrderTypeEnum } from '../../share_platform/market/entity/enum/OrderType.enum';
// import { AccRecvPay } from '../../share_platform/market/entity/account/AccRecvPay';
// import { Get } from '../../share_platform/framework/util/router/mapping';
// import { Body, validate } from '../../share_platform/framework/util/router/validate';
// import { PayFee } from '../../share_platform/market/entity/synthesizeFee/PayFee';
// import { PayFeeDetail } from '../../share_platform/market/entity/synthesizeFee/PayFeeDetail';
// import { OrderStatusEnum } from '../../share_platform/market/entity/enum/OrderStatus.enum';
// import { FeeListStatusEnum } from '../../share_platform/market/entity/enum/FeeListStatus.enum';
// import { EmployeeType } from '../../constant';
// import { Order } from '../../share_platform/market/entity/TransOrder/Order';
export default class extends Controller {
    // @bp.post('/api/payfee/finish')
    // async payfeeFinish(@Body(PayFee) payfee: PayFee) {
    //     let up = await conn.getRepository(PayFee).update(payfee.id, payfee);
    //     this.ctx.body = success({ up });
    // }
    // @validate
    // @bp.post('/api/payfee/create')
    // async payfeeCreate(@Body(PayFee) payfee: PayFee) {
    //     let details = payfee.payDetails;

    //     let newPayfee = await conn.getRepository(PayFee).save(payfee);
    //     let feeListIds = details.map(detail => detail.memberARFeeId);
    //     details.forEach(detail => detail.masterPayFeeId = newPayfee.id);
    //     let i = await conn.getRepository(PayFeeDetail).insert(details);
    //     await conn.getRepository(FeeList).update(feeListIds, { status: FeeListStatusEnum.Process });

    //     this.ctx.body = success({ i, newPayfee });
    // }
    // @bp.post('/api/feelist/update')
    // async feelistUpdate(@Body(FeeList) feelist: FeeList) {
    //     let up = await conn.getRepository(FeeList).update(feelist.id, feelist);
    //     this.ctx.body = success({ up });
    // }
    // @bp.get('/api/feelist/delete')
    // async feeListDelete() {
    //     let del = await conn.getRepository(FeeList).delete(this.ctx.query.id);
    //     this.ctx.body = success({ del });
    // }

    // @bp.post('/api/category/update')
    // async  update() {
    //     let cate: ProdCatalog = this.ctx.request.body;
    //     let up = await conn.getRepository(ProdCatalog).update(cate.id, cate);
    //     this.ctx.body = success({ up });
    // }
    // @Get('/api/employee/delete')
    // async epDel() {
    //     let del = await conn.getRepository(User).delete(this.ctx.query.epId);
    //     this.ctx.body = success({ del });
    // }


    // @bp.post('/api/reWithDr/withDraw')
    // async withDraw() {
    //     let { amount,
    //         billNo,
    //         cardNo,
    //         mktId,
    //         payPassword } = this.ctx.request.body;

    //     let token = this.ctx.get('Authorization').replace(`Bearer `, '');
    //     let userJSON: { id: number, password: string } = this.service.framework.jwt.verifyIgnoreExpiration(token) as any;
    //     // let withrecharge: RechargeWithDraw = this.ctx.request.body;
    //     let card = await conn.getRepository(CustCard).findOne({ no: cardNo });
    //     if (card) {
    //         let user = await conn.getRepository(User).findOne({ id: userJSON.id });
    //         let customer = await conn.getRepository(Customer).findOne(card.custId);
    //         if (customer) {
    //             let member = await conn.getRepository(Member).findOne({ id: customer.memberId });
    //             let payrecvs: AccRecvPay[] = []
    //             if (member) {
    //                 let memberAccount = await this.service.market.order.getMemberAccount(member, MemberAccountTypeEnum.MEMBER_CASH);
    //                 let payPasswordJson = this.service.framework.jwt.verifyIgnoreExpiration(member.payPassword) as { payPassword: string };
    //                 if (payPasswordJson.payPassword == payPassword) {
    //                     /** 员工参与则有 */
    //                     if (user) {
    //                         let useraccount = await this.service.market.order.getUserAccount(user, MemberAccountTypeEnum.USER_CASH);
    //                         // 员工收入
    //                         let userPayRecv = await this.service.market.order.createAccRecvPay(useraccount as any, memberAccount, -1, billNo, amount, OrderTypeEnum.TRANS);
    //                         let memberPayRecv = await this.service.market.order.createAccRecvPay(memberAccount as any, undefined, -1, billNo, amount, OrderTypeEnum.TRANS);
    //                         payrecvs.push(userPayRecv);
    //                         payrecvs.push(memberPayRecv);
    //                     } else {
    //                         let memberPayrecv = await this.service.market.order.createAccRecvPay(memberAccount as any, undefined, -1, billNo, amount, OrderTypeEnum.TRANS)
    //                         payrecvs.push(memberPayrecv)
    //                     }
    //                     let withrecharge = Object.assign({ customerId: card.custId, businessType: BussinessTypeEnum.WITHDRAW, createTime: new Date(), actTime: new Date() } as RechargeWithDraw, { mktId, billNo } as RechargeWithDraw);
    //                     let re = await conn.getRepository(RechargeWithDraw).save(withrecharge);
    //                     this.ctx.body = success({ re, payrecvs });
    //                 } else {
    //                     this.ctx.body = err(400, '支付密码错误');
    //                 }
    //             } else {
    //                 this.ctx.body = err(404, '找不到会员');
    //             }
    //         } else {
    //             this.ctx.body = err(404, '用户未注册');
    //         }
    //     } else {
    //         this.ctx.body = err(400, '会员不存在');
    //     }
    //     this.ctx.body = err(400, '未处理的分之')
    // }

    // @bp.post('/api/reWithDr/recharge')
    // async recharge() {
    //     let token = this.ctx.get('Authorization').replace(`Bearer `, '');
    //     let userJSON: { id: number, password: string } = this.service.framework.jwt.verifyIgnoreExpiration(token) as any;
    //     let withrecharge: RechargeWithDraw = this.ctx.request.body;
    //     if (typeof withrecharge.afterBalAmt == 'string') withrecharge.afterBalAmt = parseFloat(withrecharge.afterBalAmt);
    //     let card = await conn.getRepository(CustCard).findOne({ no: withrecharge.cardNo });
    //     if (card) {
    //         let user = await conn.getRepository(User).findOne({ id: userJSON.id });
    //         let member = await conn.getRepository(Member).findOne({ id: withrecharge.memberId });
    //         let payrecvs: AccRecvPay[] = []
    //         if (member) {
    //             let memberAccount = await this.service.market.order.getMemberAccount(member, MemberAccountTypeEnum.MEMBER_CASH);
    //             /** 员工参与则有 */
    //             if (user) {
    //                 let useraccount = await this.service.market.order.getUserAccount(user, MemberAccountTypeEnum.USER_CASH);
    //                 // 员工收入
    //                 let userPayRecv = await this.service.market.order.createAccRecvPay(useraccount as any, memberAccount, 1, withrecharge.billNo, withrecharge.amount, OrderTypeEnum.TRANS);
    //                 let memberPayRecv = await this.service.market.order.createAccRecvPay(memberAccount as any, undefined, 1, withrecharge.billNo, withrecharge.amount, OrderTypeEnum.TRANS);
    //                 payrecvs.push(userPayRecv);
    //                 payrecvs.push(memberPayRecv);
    //             } else {
    //                 let memberPayrecv = await this.service.market.order.createAccRecvPay(memberAccount as any, undefined, 1, withrecharge.billNo, withrecharge.amount, OrderTypeEnum.TRANS)
    //                 payrecvs.push(memberPayrecv)
    //             }
    //             withrecharge = Object.assign({ customerId: card.custId, businessType: BussinessTypeEnum.RECHARGE, createTime: new Date(), actTime: new Date() } as RechargeWithDraw, withrecharge);
    //             let re = await conn.getRepository(RechargeWithDraw).save(withrecharge);
    //             this.ctx.body = success({ re, payrecvs });
    //         }
    //     } else {
    //         this.ctx.body = err(400, '会员不存在');
    //     }

    // }
    // @bp.get('/api/public/getOrderNo')
    // async getOrderNo() {
    //     let { key } = this.ctx.query;
    //     let orderNo = await this.service.framework.util.getNo(key);
    //     this.ctx.body = success({ orderNo });
    // }
    // @bp.post('/api/txnArea/update')
    // async txnAreaUpdate() {
    //     let { mktId,
    //         txnCode,
    //         txnId,
    //         txnName } = this.ctx.request.body;
    //     let up = await conn.getRepository(TransArea).update({ txnId, mktId }, { txnCode, txnName });
    //     this.ctx.body = success({ up });
    // }
    // @bp.post('/api/order/orderPay')
    // async orderPay() {
    //     let token = this.ctx.get('Authorization').replace('Bearer ', '');
    //     let userJSON = await this.service.framework.jwt.verifyIgnoreExpiration(token) as User;
    //     let order: Order = this.ctx.request.body;

    //     let payPassword = order.payPassword;
    //     let member = await conn.getRepository(Member).findOne({ where: { no: order.sellerMemNo } });
    //     order = await conn.getRepository(Order).findOne({ id: order.id }) as Order;
    //     order.orderDetails = await conn.getRepository(OrderDetail).find({ where: { orderId: order.id } });
    //     let user = await conn.getRepository(User).findOne({ id: userJSON.id });
    //     if (member && order && user) {
    //         order.sellerCustId = member.customerId;
    //         // order.buyerMemId = member.id;
    //         order.sellerMemId = member.id;
    //         order.actor = user.name;
    //         let payPasswordJSON = this.service.framework.jwt.verifyIgnoreExpiration(member.payPassword) as { payPassword: string };
    //         if (payPassword == payPasswordJSON.payPassword) {
    //             order = await this.service.market.order.computeOrderFee(order);
    //             order.payAmt = order.buyerFee + order.apAmt;

    //             let result = await this.service.market.order.payOrder(order, user);
    //             if (result.status == 200) {
    //                 this.ctx.body = success({ result });
    //             } else {
    //                 this.ctx.body = err(result.status, result.msg);
    //             }
    //         } else {
    //             this.ctx.body = err(400, '支付密码错误' + payPasswordJSON.payPassword)
    //         }
    //     } else {
    //         this.ctx.body = err(400, '会员或订单或用户不存在');
    //     }
    // }
    // @bp.post('/api/order/orderCreate')
    // async orderCreate() {
    //     let order: Order = this.ctx.request.body;
    //     let no = await this.service.framework.util.getNo(order.mktId + 'order');
    //     delete order.id;
    //     order.orderNo = no + '';
    //     order.createTime = new Date();
    //     order.status = OrderStatusEnum.TOBE_PAY;
    //     order.createWay = CreateWayEnum.WEB;
    //     order = await this.service.market.order.computeOrderFee(order);

    //     order = await conn.getRepository(Order).save(order);
    //     if (order) {
    //         order.orderDetails.forEach(detail => detail.orderId = order.id);
    //         let insertDetails = await conn.getRepository(OrderDetail).insert(order.orderDetails);
    //         let orderEx = await conn.getRepository(Order).findOne({ orderNo: order.orderNo });
    //         if (orderEx) {
    //             orderEx.buyerFee = decimal2Float(orderEx.buyerFee);
    //             orderEx.sellerFee = decimal2Float(orderEx.sellerFee);
    //             orderEx.apAmt = decimal2Float(orderEx.apAmt);
    //         }
    //         this.ctx.body = success({ order: orderEx, insertDetails });
    //     } else {
    //         this.ctx.body = err(400, '系统异常');
    //     }

    // }
    @bp.get('/api/category/detail')
    async categoryDetail() {
        let prodCatalog = await conn.getRepository(ProdCatalog).findOne({ catCode: this.ctx.query.catCode, mktId: this.ctx.query.mktId });
        this.ctx.body = success({ prodCatalog });
    }

    @bp.get('/api/transFeeRule/ableAndDisable')
    async ableAndDisable() {
        let up = await conn.getRepository(TransFeeRule).update({ id: this.ctx.query.id }, { enabled: this.ctx.query.status == 'true' || this.ctx.query.status == true })
        this.ctx.body = success({ up });
    }
    @bp.post('/api/transFeeRule/create')
    async transFeeRuleCreate() {
        let tranfeeRule: TransFeeRule = this.ctx.request.body;
        tranfeeRule = Object.assign(new TransFeeRule(), tranfeeRule);
        let insert = await conn.getRepository(TransFeeRule).insert(tranfeeRule);
        this.ctx.body = success({ insert })
    }
    @bp.post('/api/transFeeRule/list')
    async transFeeRuleList() {
        let query: QueryParam = this.ctx.request.body;
        query.pageParam.pageIndex = query.pageParam.pageIndex - 1;
        let rules = await this.service.framework.stq.findPageEntityByEntity(this.ctx.request.body, TransFeeRule);
        this.ctx.body = success({ paging: rules });

    }
    @bp.post('/api/modify-password')
    async modifyPassword() {
        let up = await conn.getRepository(User).update({ id: this.ctx.request.body.epId }, { password: this.service.framework.jwt.sign({ password: this.ctx.request.body.password }) })
        this.ctx.body = success({ up });
    }
    @bp.get('/api/customer/changeCardStatus')
    async changeCardStatus() {
        let { cardId, status } = this.ctx.query;
        let up = await conn.getRepository(CustCard).update({ id: cardId }, { status });
        this.ctx.body = success({ up });
    }
    @bp.post('/api/customer/relationCard')
    async relationCard() {
        let customer: Customer = this.ctx.request.body;
        let card: CustCard = Object.assign(new CustCard(), {
            custId: customer.id,
            mktId: customer.mktId,
            no: new Date().getTime().toString().substr(-6)
        },
            customer.card);

        let up = await conn.getRepository(CustCard).insert(card);
        this.ctx.body = success({ up });
    }
    @bp.get('/api/customer/findByCardNo')
    async findByCardNo() {
        let { cardNo } = this.ctx.query;
        let card = await conn.getRepository(CustCard).findOne({ no: cardNo, });
        if (card) {
            let customer = await conn.getRepository(Customer).findOne({ id: card.custId })
            if (customer) {
                let member = await conn.getRepository(Member).findOne({ id: customer.memberId });
                if (member) {
                    let account: Account = null as any;
                    customer.card = card;
                    let memberCashAccount = await conn.getRepository(MemberAccount).findOne({ accountType: MemberAccountTypeEnum.MEMBER_CASH, memberId: member.id });
                    if (memberCashAccount) {
                        let cashAccount = await conn.getRepository(Account).findOne({ no: memberCashAccount.accountNo });
                        account = cashAccount as Account;

                    }
                    if (account != null) {
                        account.balAmt = decimal2Float(account.balAmt);
                        account.availAmt = decimal2Float(account.availAmt);
                        // account.
                    }
                    member.customers = [customer];
                    this.ctx.body = success({ member, account })
                } else {
                    this.ctx.body = err(400, "会员不存在");
                }
            } else {
                this.ctx.body = err(400, '用户不存在')
            }

        } else {
            this.ctx.body = err(404, '卡号不存在')
        }
    }
    @bp.post('/api/metaObject/data/page')
    async metaObjectDataPage() {
        let paging = await this.service.framework.metaQuery.queryPageEntity(this.ctx.query.objectCode, this.ctx.request.body);
        this.ctx.body = success({ paging });
    }
    @bp.get('/api/menu/getByMenuCode')
    async getMenuByMenucode() {
        let menu = await conn.getRepository(Menu).findOne({ menuCode: this.ctx.query.menuCode });
        this.ctx.body = success({ menu });
    }
    @bp.post('/api/metaObject/update')
    async metaObjectUpdate() {
        let metaObject: MetaObject = this.ctx.request.body;
        await conn.getRepository(MetaField).delete((metaObject.metaFields as MetaField[]).map(field => field.id) as number[]);
        await conn.getRepository(MetaObject).delete(metaObject.metaId);
        delete metaObject.metaId;
        let newMetaObject = await conn.getRepository(MetaObject).insert(metaObject);
        if (metaObject.metaFields) {
            metaObject.metaFields.forEach(field => {
                field.objectCode = metaObject.objectCode;
                delete field.id
            });
            await conn.getRepository(MetaField).insert(metaObject.metaFields)
        }
        this.ctx.body = success({ newMetaObject });
    }
    @bp.get('/api/metaObject/detail')
    async metaObjectDetail() {
        let { objectCode } = this.ctx.query;
        let metaObject = await conn.getRepository(MetaObject).findOne({ objectCode });
        if (metaObject) {
            metaObject.metaFields = await conn.getRepository(MetaField).find({ where: { objectCode: metaObject.objectCode } })
            this.ctx.body = success({ metaObject });
        } else {
            this.ctx.body = err(400, '错误');
        }
    }
    @bp.post('/api/metaObject/create')
    async  metaObjectCreate() {
        let newMetaObject: MetaObject = this.ctx.request.body
        if (newMetaObject.metaFields) {
            newMetaObject.metaFields.forEach(field => field.objectCode = newMetaObject.objectCode);
            await conn.getRepository(MetaField).insert(newMetaObject.metaFields)
        }

        let metaObject = await conn.getRepository(MetaObject).insert(newMetaObject);

        this.ctx.body = success({ metaObject });
    }
    // @bp.post('/api/design/field')
    // async designField() {
    //     let { sql } = this.ctx.request.body;
    //     sql = this.replaceVartoNull(sql);
    //     console.log(sql);
    //     try {
    //         let result = await new Promise<any>(resolve => {
    //             connection
    //                 .execute(
    //                     sql,
    //                     function (err, results, fields) {
    //                         console.log(results, fields);
    //                         resolve({
    //                             err, data: results, fields: fields.map((field: MysqlMetaFieldType) => {
    //                                 let type: string = '';
    //                                 /**解析 type */
    //                                 switch (field.columnType) {
    //                                     case 3:
    //                                     case 246:
    //                                     case 254:
    //                                         type = 'int';
    //                                         break;
    //                                     case 253:
    //                                         type = 'varchar'
    //                                         break;
    //                                     case 12:
    //                                         type = 'datetime'
    //                                         break;
    //                                     // decimal

    //                                 }
    //                                 console.log(field);
    //                                 return { type, field: field.name, pure: field }
    //                             })
    //                         }); // results contains rows returned by server
    //                     }
    //                 );
    //         });
    //         this.ctx.body = { ok: true, data: result };
    //     } catch (e) {
    //         if (e) this.ctx.body = err(500, 'sql错误');
    //     }

    // }
    replaceVartoNull(sql: string): string {
        return sql.replace(/@\S+/ig, 'null');
    }
    @bp.get('/api/metaObject/list')
    async  metaObjectList() {
        let objects = await conn.getRepository(MetaObject).find();
        this.ctx.body = success({ metaObjects: objects })
    }
    // @bp.post('/api/category/create')
    // async categoryCreate() {
    //     let newCate: ProdCatalog = this.ctx.request.body;
    //     let category = await conn.getRepository(ProdCatalog).insert(newCate);
    //     this.ctx.body = success({ category });
    // }
    @bp.post('/api/category/internal-list')
    async categoryInternalList() {
        let paging = await this.service.framework.stq.findPageEntityByEntity(this.ctx.request.body, ProdCatalog);
        this.ctx.body = success({
            categorys: paging
        });
    }
    @bp.post('/api/category/list')
    async  categoryList() {
        let paging = await this.service.framework.stq.findPageEntityByEntity(this.ctx.request.body, ProdCatalog);
        this.ctx.body = success({
            paging
        });
    }
    @bp.get('/api/txnArea/detail')
    async txnAreaDetail() {
        let { txnId, marketId } = this.ctx.query;
        let transArea = await conn.getRepository(TransArea).findOne({ mktId: marketId, txnId });
        this.ctx.body = success({ txnArea: transArea });
    }
    @bp.post('/api/txnArea/list')
    async areaList() {
        let paging = await this.service.framework.stq.findPageEntityByEntity(this.ctx.request.body, TransArea);
        this.ctx.body = success({ paging });
    }
    @bp.post('/api/txnArea/create')
    async txnAreaCreate() {
        let newArea = Object.assign(new TransArea(), this.ctx.request.body);
        let area = await conn.getRepository(TransArea).insert(newArea);
        this.ctx.body = success({ area });
    }
    @bp.post('/api/feelist/list')
    async feelistList() {
        let paging = await this.service.framework.stq.findPageEntityByEntity(this.ctx.request.body, FeeList);
        for (let fee of paging.rows) {
            fee['member'] = await conn.getRepository(Member).findOne({ id: fee.memberId });
            fee['member'].customers = await conn.getRepository(Customer).find({ where: { memberId: fee.memberId } });
            fee['recvPaySubject'] = await conn.getRepository(RecvPaySubject).findOne({ subjectId: fee.subjectId });
        }
        this.ctx.body = success({ paging });
    }
    @bp.post('/api/feelist/creat')
    async feelistCreat() {
        let newFeelist: FeeList = this.ctx.request.body;
        newFeelist.billNo = new Date().toString();
        newFeelist.createTime = new Date();
        let feelist = await conn.getRepository(FeeList).insert(newFeelist);

        this.ctx.body = success({ feelist });

    }
    @bp.get('/api/employee/queryMemberByPhone')
    async queryMemberByPhone() {
        let { phone, mktId } = this.ctx.query;
        let customer = await conn.getRepository(Customer).findOne({ mobi: phone, mktId });
        if (customer) {
            let member = await conn.getRepository(Member).findOne({ where: { id: customer.memberId } }) as Member;
            if (member) {
                member.customers = [customer];
                this.ctx.body = success({ member })
            }
            else {
                this.ctx.body = err(400, '用户未开通会员');
            }

        } else {
            this.ctx.body = err(400, '成功');
        }

    }
    /** 会员添加成员 */
    @bp.post('/api/customer/create')
    async   customerCreate() {
        let { memberId, mktId, mobi, name } = this.ctx.request.body;

        let member = await conn.getRepository(Member).findOne({ id: memberId });
        if (member) {
            let existCustomer = await conn.getRepository(Customer).findOne({ mobi, mktId });
            if (existCustomer) {
                this.ctx.body = err(400, '该手机号已经被注册');

            } else {
                let newCustomer = new Customer();
                newCustomer.status = CustomerStatusEnum.Active;
                newCustomer.memberId = memberId;
                newCustomer.mobi = mobi;
                newCustomer.name = name;
                newCustomer.mktId = mktId;
                await conn.getRepository(Customer).insert(newCustomer);

                this.ctx.body = success({ customer: newCustomer });
            }
        } else {
            this.ctx.body = err(400, '会员不存在');
        }
    }
    @bp.get('/api/member/detail')
    async memberDetail() {
        let { memberId } = this.ctx.query;
        let member = await conn.getRepository(Member).findOne({ id: memberId });
        if (member) {
            member.customers = await conn.getRepository(Customer).find({ memberId: member.id });
            for (let customer of member.customers) {
                customer.card = await conn.getRepository(CustCard).findOne({ custId: customer.id }) as CustCard;
            }
            let employee = await conn.getRepository(User).findOne();
            this.ctx.body = success({ member, employee });
        } else {
            this.ctx.body = err(400, '会员不存在');
        }

    }
    @bp.post('/api/member/like')
    async  memberLike() {
        let paging = await this.service.framework.stq.findPageEntityByEntity(this.ctx.request.body, Member);
        for (let member of paging.rows) {
            member.customer = await conn.getRepository(Customer).findOne({ id: member.customerId }) as Customer;
        }
        this.ctx.body = success({ paging })
    }
    // @bp.post('/api/member/create')
    // async memberCreate() {
    //     let member: Member = this.ctx.request.body;
    //     let no = await this.service.framework.util.getNo(member.mktId + 'member')
    //     let payPassword = this.service.framework.jwt.sign({ payPassword: member.payPassword });

    //     member = Object.assign({
    //         createTime: new Date(), phoneNo: member.phoneNo ? member.phoneNo : member['mobi'],
    //         no, createWay: CreateWayEnum.WEB, payPassword,
    //     }, new Member())



    //     let existCustomer = await conn.getRepository(Customer).findOne({ mobi: member.phoneNo });
    //     if (existCustomer) {
    //         if (existCustomer.memberId) {
    //             this.ctx.body = err(400, '员工错误')
    //         } else {
    //             let newMember = await conn.getRepository(Member).insert(member);
    //             existCustomer.memberId = newMember.raw.insertId;

    //             await conn.getRepository(Customer).update({ id: existCustomer.id }, existCustomer);
    //             this.ctx.body = success({ newMember });
    //         }
    //     } else {
    //         // 1. 创建会员
    //         let newMember = await conn.getRepository(Member).insert(member);

    //         //2. 创建用户
    //         let newCustomer = new Customer();
    //         newCustomer.name = member.name;
    //         newCustomer.createWay = CreateWayEnum.WEB;
    //         newCustomer.createTime = new Date();
    //         newCustomer.password = this.service.framework.jwt.sign({ mobi: member.phoneNo, password: '123' })
    //         newCustomer.mobi = member.phoneNo;
    //         newCustomer.memberId = newMember.raw.insertId;
    //         newCustomer.mktId = member.mktId;
    //         let insertCustomer = await conn.getRepository(Customer).insert(newCustomer);
    //         member.customerId = insertCustomer.raw.insertId;
    //         member.id = newMember.raw.insertId;
    //         //3. 创建会员现金账户
    //         let accountNo = await this.service.framework.util.getNo(newCustomer.mktId + 'account');

    //         let cashAccount = Object.assign({ name: member.name, mktId: member.mktId, no: accountNo, accountType: MemberAccountTypeEnum.MEMBER_CASH, }, new Account())
    //         await conn.getRepository(Account).insert(cashAccount);
    //         let memberAccountNo = await this.service.framework.util.getNo(newCustomer.mktId + 'memberAccount');
    //         // 4. 创建会员账户
    //         let memberAccount = Object.assign({ memberId: newCustomer.memberId, accountNo: memberAccountNo, accountType: MemberAccountTypeEnum.MEMBER_CASH }, new MemberAccount());
    //         await conn.getRepository(MemberAccount).insert(memberAccount);

    //         await conn.getRepository(Member).update({ id: member.id }, member);
    //         this.ctx.body = success({ member, newCustomer })

    //     }

    // }
    @bp.post('/api/subject/custom-update')
    async customUpdate() {
        let sub = this.ctx.request.body;
        let up = await conn.getRepository(RecvPaySubject)
            .update({ subjectId: sub.subId },
                {
                    subjectId: sub.subId,
                    subjectCode: sub.subCode,
                    subjectName: sub.subName,
                    subjectLinkId: sub.subLinkId,
                    mktId: sub.mktId,
                });
        this.ctx.body = success({ up });
    }
    @bp.post('/api/subject/custom-create')
    async customeSubjectCreate() {
        let sub = this.ctx.request.body
        let subject = await conn.getRepository(RecvPaySubject)
            .insert({
                subjectName: sub.subName,
                subjectCode: sub.subCode,
                mktId: sub.marketId,
                parentId: sub.parentId, subjectLinkId: sub.subLinkId
            });
        this.ctx.body = success({ subject });
    }
    @bp.post('/api/subject/custom-subjects')
    async customSubject() {
        let paging = await this.service.framework.stq.findPageEntityByEntity(this.ctx.request.body, RecvPaySubject);
        this.ctx.body = success({
            subjects: paging
        });
    }
    @bp.get('/api/employee/detail')
    async userDetail() {
        let employee = await conn.getRepository(User).findOne({ id: this.ctx.query.epId });
        this.ctx.body = success({ employee });
    }
    @bp.post('/api/member/page')
    async  memberPage() {
        await conn.getRepository(Member)
        let paging = await this.service.framework.stq.findPageEntityByEntity(this.ctx.request.body, Member);
        for (let member of paging.rows) {
            member.customers = await conn.getRepository(Customer).find({ where: { memberId: member.id } })
        }
        this.ctx.body = success({ paging });
    }
    @bp.post('/api/param/update')
    async paramUpdate() {
        let up = await conn.getRepository(Params).update({ id: this.ctx.request.body.id }, this.ctx.request.body);
        this.ctx.body = success(up);
    }

    @bp.post('/api/subject/internal-list')
    async internalList() {
        let paging: RecvPaySubject[] = await this.service.framework.stq.findPageEntityByEntity(this.ctx.request.body, RecvPaySubject) as any;
        this.ctx.body = success({ paging });
    }
}