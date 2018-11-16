import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { MetaEntity } from '../../util/metadata/MetaEntity';
import { Prop } from '../../util/metadata/Field';

@MetaEntity()
@Entity()
export class Developer {
    @PrimaryGeneratedColumn()
    @Prop()
    devId: number;
    @Column({ nullable: false })
    devUserName: string;
    @Column({ type: "varchar", nullable: false, length: 12000 })
    password: string;
    // @Column()
    // passwordHash: string;
    @Column()
    createTime: Date = new Date();
    @Column({ nullable: true })
    updateTime: Date = new Date();
    // @Column()
    authorities: string[];
}

