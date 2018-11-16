import {
    //  Entity, 
    PrimaryGeneratedColumn, Column, JoinColumn, OneToOne
} from "typeorm";
import { MemberTypeEnum } from '../enum/MemberType.enum';
import { MemberStatusEnum } from '../enum/MemberStatus.enum';
import { CertWayEnum } from '../enum/CertWay.enum';
import { CreateWayEnum } from '../enum/CreateWay.enum';
import { Customer } from './Customer';
import { CustCard } from './CustCard';
// import { MetaEntity } from '../../../framework/util/metadata/MetaEntity';
import { Prop } from '../../../framework/util/metadata/Field';
import { Ignore } from '../../../framework/util/Ignore';

// @MetaEntity()
// @Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    @Prop()
    no: string; // 会员编号
    @Column()
    @Prop()
    name: string; // 会员名
    @Column()
    @Prop()
    idCardNo: string; // 身份证号
    @Column({ nullable: true })
    idcardImgUrl: string;// 身份证照片
    card: CustCard;
    @Column('enum', { nullable: true, enum: MemberTypeEnum })
    memberType: MemberTypeEnum;
    @Column({ nullable: true, })
    legalName: string;
    @Column({ nullable: true, })
    coLicImgUrl: string;
    @Column({ nullable: true, })
    taxNo: string;
    @Column({ nullable: true })
    address: string;
    @Column()
    phoneNo: string;
    @Column('enum', { enum: MemberStatusEnum, nullable: true })
    status: MemberStatusEnum = MemberStatusEnum.ENABLE;// 会员状态
    @Column('enum', { enum: CreateWayEnum, })
    createWay: CreateWayEnum;// 创建途径
    @Column({ nullable: true })
    mktId: number;// 所属市场id
    @Column()
    createTime: Date = new Date();// 创建时间
    @Column({ nullable: true })
    creatorId: number;// 创建人id
    @Column({ nullable: true })
    creator: string;// 创建人
    @Column()
    payPassword: string;// 支付密码 
    @Column({ nullable: true })
    pwdEncrypted: boolean;// 密码是否已加密
    @Column({ nullable: true })
    certificated: boolean;// 是否已经实名认证
    @Column({ nullable: true })
    certTime: Date;// 实名认证时间
    @Column('enum', { enum: CertWayEnum, nullable: true })
    certWay: CertWayEnum;// 实名认证方法
    @Column({ nullable: true })
    certLog: string;// 实名认证日志

    @Column({ nullable: true, })
    customerId: number;
    @OneToOne(_ => Customer, customer => customer.memberId)
    @JoinColumn()
    customer: Customer;
    customers?: Customer[];
    @Column({ nullable: true, default: '', })
    friendIds: string;
    @Ignore()
    account: Account;
    @Ignore()
    friends: Member[]
}