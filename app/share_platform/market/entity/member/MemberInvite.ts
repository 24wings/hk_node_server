import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { MemberInviteStatusEnum } from '../enum/MemberInviteStatus.enum';

@Entity()
export class MemberInvite {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    content: number; // 会员编号
    /**
     * 发送方的customerId
     */
    @Column()
    memberId: number;
    @Column()
    sendCustId: number;
    @Column()
    sendCusName: string;
    @Column()
    recvMobi: string;
    @Column()
    recvCusName: string;
    @Column('enum', { enum: MemberInviteStatusEnum })
    status: MemberInviteStatusEnum = MemberInviteStatusEnum.Active;

}