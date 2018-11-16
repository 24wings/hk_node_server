import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { MemberAccountTypeEnum } from '../../../framework/enum/MemberAccountType.enum';
import { AccountStatusEnum } from '../enum/AccountStatus.enum';
import { decimalTransform } from '../../../framework/util/decimalTransform';

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    no: string; // 账户号
    @Column()
    name: string; // 账户名
    @Column('decimal', { transformer: decimalTransform })
    balAmt: number = 0; // 账户余额(可用金额+未结算金额)
    @Column('decimal', { transformer: decimalTransform })
    availAmt: number = 0; // 可用金额
    @Column('decimal', {
        transformer: decimalTransform
    })
    frozenAmt: number = 0; // 冻结金额
    @Column('enum', { enum: MemberAccountTypeEnum })
    accountType: MemberAccountTypeEnum;// 账户类型
    @Column('enum', { enum: AccountStatusEnum, nullable: false })
    status: AccountStatusEnum = AccountStatusEnum.ACTIVE;
    @Column({ nullable: true })
    remark: string; // 备注 
    @Column()
    mktId: number;// 所属市场id
    @Column()
    createTime: Date = new Date();// 创建时间
}