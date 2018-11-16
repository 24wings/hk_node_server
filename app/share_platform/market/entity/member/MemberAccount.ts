import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { MemberAccountTypeEnum } from '../../../framework/enum/MemberAccountType.enum';

@Entity()
export class MemberAccount {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: true })
    relationId: number;
    @Column()
    accountNo: string;
    @Column('enum', { enum: MemberAccountTypeEnum })
    accountType: MemberAccountTypeEnum;
    @Column()
    memberId: number;
}