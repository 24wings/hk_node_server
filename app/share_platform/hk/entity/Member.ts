import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { MemberType } from '../enum/MemberType.enum';
import { AuditStatusEnum } from '../enum/AuditStatus.enum';
import { MetaEntity } from '../../framework/util/metadata/MetaEntity';
import { Prop } from '../../framework/util/metadata/Field';
import { User } from '../../framework/entity/rbac/User';

/**
 * @author liaoweimin
 * @version 1.0
 * @created 2018/9/22 11:19:13
 */
/**会员信息*/
@MetaEntity()
@Entity()
export class Member {
    /**会员Id*/
    @PrimaryGeneratedColumn()
    @Prop()
    id: number;
    /**代码（前缀+会员流水号,前缀:供应商S，采购商B，个人C，流水号8位)*/
    @Column()
    code: string;
    /**名称*/
    @Column()
    name: string;
    /**手机号(用来收验证码)*/
    @Column()
    mobile: string;
    /**负责人姓名*/
    @Column()
    principal: string;
    /**联系地址*/
    @Column()
    address: string;
    /**银行账号*/
    @Column()
    bankInfo: string;
    /**企业税号*/
    @Column()
    taxCode: string;
    /**会员类型*/
    @Column("enum", { enum: MemberType })
    memberType: MemberType;
    /**审核状态*/
    @Column("enum", { enum: AuditStatusEnum })
    memberStatus: AuditStatusEnum;
    @OneToOne(() => User)
    @JoinColumn()
    user: User;
    /**前端字段 */
    password?: string | any;
    /**前端字段 */
    orgId?: number;
}