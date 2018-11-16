import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TransFeeRule {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    mktId: number;
    @Column()
    txnId: number;
    /** 交易重量收费率 千分之几 */
    @Column('decimal')
    feeRateWgt: number;
    /** 交易金额收费率 */
    @Column('decimal')
    feeRateAmt: number;
    @Column('decimal', { nullable: true })
    feeFixed: number;//固定收费
    @Column()
    subjectId: number;
    /** 买卖标志 
     * -1 买方
     * 
     * 1 卖方
     *  */
    @Column({ nullable: false })
    io: number;
    @Column()
    enabled: boolean = true;
    @Column('decimal')
    feeMax: number;
    @Column('decimal')
    feeMin: number;
    @Column()
    createTime: Date = new Date();
    @Column({ nullable: true })
    creator: string;
    @Column({ nullable: true })
    creatorId: number;


}