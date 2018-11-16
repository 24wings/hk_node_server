import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { CustCardStatusEnum } from '../enum/CustCardStatus.enum';

@Entity()
export class CustCard {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    custId: number
    @Column()
    no: string;
    @Column('enum', { enum: CustCardStatusEnum, nullable: false })
    status: CustCardStatusEnum = CustCardStatusEnum.ACTIVE;
    @Column()
    mktId: number;//所属市场id
    @Column()
    createTime: Date = new Date();//创建时间 
    @Column({ nullable: true })
    creatorId: number;//创建人id
    @Column({ nullable: true })
    creator: number//创建人
}  