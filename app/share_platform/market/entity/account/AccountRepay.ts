import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { OrderTypeEnum } from '../enum/OrderType.enum';

@Entity()
export class AccountRepay {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    repayNo: string; // 欠款流水号
    @Column()
    deptId: number;
    @Column()
    repayAmt: number; // 还款金额
    @Column({ nullable: true })
    confirmed: boolean; // 是否同意
    @Column('enum', { enum: OrderTypeEnum })
    orderType: OrderTypeEnum; // 订单类型
    @Column()
    orderNo: string; // 订单编号
    @Column({ nullable: true })
    remark: string; // 备注
    @Column()
    createTime: Date = new Date(); // 创建时间
    @Column({ nullable: true })
    confirmTime: Date; // 确认时间
    @Column()
    mktId: number;// 所属市场id

}