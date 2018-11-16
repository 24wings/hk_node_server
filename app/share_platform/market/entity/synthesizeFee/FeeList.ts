import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { FeeListStatusEnum } from '../enum/FeeListStatus.enum';

@Entity()
export class FeeList {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    billNo: string;
    @Column()
    title: string;// 应收费用内容
    @Column()
    memberId: number;
    @Column()
    subjectId: number;
    @Column()
    startDate: Date;
    @Column()
    endDate: Date;
    /**
     * active 
     * proceing
     * finish
     */
    @Column("enum", { enum: FeeListStatusEnum })
    status: FeeListStatusEnum = FeeListStatusEnum.Active;
    @Column('decimal', { nullable: false })
    arAmount: number;
    @Column()
    mktId: number;// 所属市场id
    @Column({ nullable: true })
    txnId: number;// 所属区域  
    @Column()
    createTime: Date = new Date();// 创建时间
    @Column({ nullable: true })
    creatorId: number;// 创建人Id
    @Column({ nullable: true })
    creator: string;// 创建人
}