import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
// import { IOEnum } from '../enum/IO.enum';
import { OrderTypeEnum } from '../enum/OrderType.enum';
import { decimalTransform } from '../../../framework/util/decimalTransform';


@Entity()
export class AccRecvPay {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    recvPayNo: string; // 收支流水号
    @Column()
    accountId: number; // 账户Id
    @Column()
    accountName: string; // 账户Id
    @Column({ nullable: true })
    toAccountId: number; // 对方账户Id
    @Column({ nullable: true })
    toAccountName: string; // 对方账户名称
    @Column()
    io: number;// 收支方向
    @Column()
    subjectId: number; // 收支科目
    @Column()
    subjectName: string; // 收支科目
    @Column('decimal', { transformer: decimalTransform })
    amount: number; // 收支金额
    /**账户余额(可用金额+未结算金额) */
    @Column('decimal', { transformer: decimalTransform })
    balAmt: number;
    /**可用金额 */
    @Column('decimal', { transformer: decimalTransform })
    availAmt: number;
    @Column('decimal', { transformer: decimalTransform })
    frozenAmt: number; // 冻结金额
    @Column('enum', { enum: OrderTypeEnum })
    orderType: OrderTypeEnum; // 订单类型
    @Column()
    orderNo: string; // 订单编号
    @Column({ nullable: true, comment: '备注' })
    remark: string; // 备注
    @Column()
    createTime: Date = new Date(); // 创建时间
    @Column()
    mktId: number;// 所属市场id

}