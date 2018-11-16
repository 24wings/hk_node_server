import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserStatusEnum } from '../../enum/UserStatus.enum';
import { MetaEntity } from '../../util/metadata/MetaEntity';
import { Prop } from '../../util/metadata/Field';

@MetaEntity()
@Entity({ synchronize: false })
export class User {
    @PrimaryGeneratedColumn()
    @Prop()
    id: number;
    @Column({ nullable: true, length: 20 })
    name: string;
    @Column({ nullable: false, length: 30 })
    userName: string;
    @Column({ nullable: false, length: 1000 })
    password: string;
    pwdEncrypted: string;
    @Column()
    createTime: Date = new Date();
    @Column({ nullable: true })
    updateTime: Date = new Date();
    @Column('enum', { enum: UserStatusEnum })
    status: UserStatusEnum = UserStatusEnum.Active;
    @Column()
    orgId: number;
    @Column({ nullable: true, length: 50 })
    creator: string;
    @Column({ nullable: true })
    creatorId: number;
    @Column({ nullable: true, length: 200 })
    roleIds: string;



}
