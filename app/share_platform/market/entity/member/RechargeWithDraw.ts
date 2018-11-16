import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { BussinessTypeEnum } from '../../../framework/enum/BusinessType.enum';
import { PayTypeEnum } from '../enum/PayType.enum';
import { Member } from './Member';
import { Ignore } from '../../../framework/util/Ignore';

@Entity()
export class RechargeWithDraw {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    billNo: string;
    @Column('enum', { enum: BussinessTypeEnum })
    businessType: BussinessTypeEnum;//是否存款
    @Column('enum', { enum: PayTypeEnum })
    payType: PayTypeEnum;//支付方式
    @Column()
    memberId: number;
    @Column()
    customerId: number;
    @Column()
    amount: number;
    @Column()
    afterBalAmt: number;
    @Column()
    mktId: number;//所属市场id
    @Column()
    createTime: Date = new Date();//创建时间
    @Column({ nullable: true })
    creatorId: number;//创建人Id
    @Column({ nullable: true })
    creator: string;//创建人
    @Column()
    actTime: Date = new Date();//结算时间
    @Column({ nullable: true })
    actorId: number;//结算员Id
    @Column({ nullable: true })
    actor: string;//结算员
    @Column({ nullable: false })
    remark: string;

    // @OneToOne(fetch = FetchType.EAGER)
    // @JoinColumn(name = "memberId", updatable = false, insertable = false)
    @Ignore()
    member: Member;
    @Ignore()
    payPassword?: string;
    @Ignore()
    cardNo: string;
}