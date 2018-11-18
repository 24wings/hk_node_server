import { MsgTypeEnum } from '../../market/entity/enum/MsgType.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MetaEntity } from '../../framework/util/metadata/MetaEntity';
import { Prop } from '../../framework/util/metadata/Field';
@MetaEntity()
@Entity()
export class MsgNotify {
    @PrimaryGeneratedColumn()
    id: number;
    @Prop()
    /** 为空时全部发 */
    @Column({ nullable: true })
    orgId: number;
    /**发给用户,为空时不限制 */
    @Column({ nullable: true })
    userId: number;
    /**消息类型,大类,通知,消息,代办 */
    @Column('enum', { enum: MsgTypeEnum })
    msgType: MsgTypeEnum;// 消息类型
    @Column()
    title: string;// 消息摘要
    @Column()
    content: string;// 消息内容
    @Column()
    addition: string;// 附加内容
    @Column()
    createTime: Date = new Date();// 创建时间
    @Column({ nullable: true })
    creatorId: string;// 创建人Id
    @Column({ nullable: true })
    creator: string;// 创建人姓名
    @Column()
    isRead: boolean = false;
    @Column()
    isJPush: boolean = false;
    @Column()
    isWebpush: boolean = true;
    /** 视图名称,也是消息类型 */
    @Column()
    viewName: string;
}