import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { OrderTypeEnum } from '../enum/OrderType.enum';

@Entity()
export class AccountDebt {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    /**欠款流水号 */
    debtNo: string;
    @Column()
    /**债权人账户Id */
    debteeAccId: number;
    @Column()
    /** 债权账户Id */
    debteeAccName: string;
    @Column()
    /**债务账户Id */
    debtorAccId: number;
    @Column()
    /** 债务账户名称 */
    debtorAccName: string;
    /**收支科目Id */
    @Column()
    subjectId: number; // 
    @Column()
    subjectName: string;// 收支科目名称
    @Column('decimal')
    /** 欠款金额 */
    debtAmt: number;
    /** 已还金额 */
    @Column()
    repayAmt: number; // 已还金额
    /**订单类型  */
    @Column('enum', { enum: OrderTypeEnum })
    orderType: OrderTypeEnum; // 
    @Column()
    orderNo: string; // 订单编号
    @Column({ nullable: true })
    remark: string; // 备注
    @Column()
    createTime: Date = new Date(); // 创建时间
    @Column()
    RepaymentDays: number; // 账期
    @Column()
    mktId: number;// 所属市场id
}