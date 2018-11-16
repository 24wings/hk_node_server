import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MemberInviteStatusEnum } from '../enum/MemberInviteStatus.enum';

@Entity()
export class ContactInvite {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    memberId: number;
    @Column()
    friendinvitemId: number;
    @Column({ comment: '邀请方会员名称' })
    memberName: string;
    @Column({ comment: '被邀请方名称' })
    friendinvitemName: string;
    @Column('enum', { enum: MemberInviteStatusEnum })
    status: MemberInviteStatusEnum = MemberInviteStatusEnum.Active;
    @Column({ comment: '内容', nullable: true })
    content: string;
    @Column()
    mktId: number;
    @Column()
    createTime: Date = new Date();
    @Column({ nullable: true })
    confirmTime: Date;
}