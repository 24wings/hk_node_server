import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { PayTypeEnum } from '../enum/PayType.enum';
import { Ignore } from '../../../framework/util/Ignore';
import { PayFeeDetail } from './PayFeeDetail';
import { PayfeeStatusEnum } from '../../../framework/enum/PayfeeStatus.enum';

@Entity()
export class PayFee {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: false })
    title: string;
    @Column({ nullable: false })
    subjectId: number;
    @Column({ nullable: false })
    memberId: number;
    @Column('decimal', { nullable: false })
    arAmount: number;
    @Column('decimal', { nullable: true })
    realAmount: number;
    @Column('enum', { enum: PayTypeEnum, nullable: true })
    payType: PayTypeEnum;// 支付方式
    @Column({ nullable: true })
    remark: string;
    @Column()
    mktId: number;// 所属市场id
    @Column()
    createTime: Date = new Date();// 创建时间
    @Column()
    creatorId: number;// 创建人Id
    @Column()
    creator: string;// 创建人
    @Column({ nullable: true })
    actTime: Date;// 结算时间
    @Column()
    actorId: number;// 结算员Id
    @Column()
    actor: string;// 结算员

    @Column("enum", { enum: PayfeeStatusEnum })
    status: PayfeeStatusEnum = PayfeeStatusEnum.Active;

    @Ignore()
    payDetails: PayFeeDetail[];
}