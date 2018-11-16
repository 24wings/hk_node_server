import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { MsgTypeEnum } from '../enum/MsgType.enum';

@Entity()
export class AppMsgNotify {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    mktId: number;// 所属市场id,为空时是平台级消息
    @Column({ nullable: true })
    custId: number;// 发给app用户,为空时不限制Customer
    @Column({ nullable: true })
    memberId: number;// 发给会员,为空时不限制会员
    @Column('enum', { enum: MsgTypeEnum, nullable: false })
    msgType: MsgTypeEnum;// 消息类型
    @Column({ nullable: false })
    title: string;// 消息摘要
    @Column({ nullable: false })
    content: string;// 消息内容
    @Column({ nullable: true })
    addition: string;// 附加内容
    @Column()
    createTime: Date = new Date();// 创建时间
    @Column({ nullable: true })
    creatorId: number;// 创建人Id
    @Column({ nullable: true })
    creator: string;// 创建人姓名
    @Column()
    isRead: boolean = false;
}
