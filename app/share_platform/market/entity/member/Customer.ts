import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { CustomerStatusEnum } from '../enum/CustomerStatus.enum';
import { CreateWayEnum } from '../enum/CreateWay.enum';
import { Member } from './Member';
import { CustCard } from './CustCard';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    mobi: string;// 手机号
    @Column({ nullable: true })
    password: string;// 登陆密码
    @Column({ nullable: true })
    pwdEncrypted: string;// 密码是否已加密
    @Column({ nullable: true })
    avatarUrl: string;// 头像URL
    @Column({ nullable: true })
    cardId: number;
    @Column({ nullable: true, })
    memberId: number;// 所属会员id
    // @JoinColumn({nullable:true})
    card: CustCard;// 当前卡
    @Column({ nullable: true })
    disabledMsgTypes: string;//
    @Column('enum', { enum: CustomerStatusEnum, default: CustomerStatusEnum.Active })
    status: CustomerStatusEnum;
    @Column('enum', { enum: CreateWayEnum })
    createWay: CreateWayEnum;// 创建途径
    @Column({ nullable: true })
    mktId: number;// 所属市场id
    @Column({ nullable: true })
    createTime: Date = new Date();// 创建时间
    @Column({ nullable: true })
    creatorId: number;// 创建人Id
    @Column({ nullable: true })
    creator: string;// 创建人
    @Column({ nullable: true })
    teamComment: string;
    @Column({ nullable: true })
    registrationId: string;
    // @ManyToOne(_ => Member, member => member.customerId, { cascade: true })
    @OneToOne(_ => Member, member => member.customerId)
    member: Member;
}