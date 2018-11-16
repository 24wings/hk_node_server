import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class SMSLog {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    isVerifySms: boolean = true;// 是否验证码短信
    @Column()
    verifyCode: string;// 验证码
    @Column()
    verifyType: string;// 验证类型
    @Column()
    mobi: string;// 手机号
    @Column()
    content: string;// 短信内容
    @Column()
    createTime: Date = new Date();// 创建时间
    @Column()
    mktId: number;
    @Column({ nullable: true })
    smsSupplier: string;// 短信服务商
}