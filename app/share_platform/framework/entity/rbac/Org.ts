import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { MetaEntity } from '../../util/metadata/MetaEntity';
import { Prop } from '../../util/metadata/Field';
@MetaEntity()
@Entity({ synchronize: false })
export class Org {
    @PrimaryGeneratedColumn()
    @Prop()
    orgId: number;

    @Column({ nullable: false, length: 20 })
    orgName: string;
    @Column()
    parentId: number;
    creatorId: number;
    @Column({ nullable: true, length: 30 })
    creator: string;
    @Column({ nullable: true })
    createTime: Date = new Date();




} 
