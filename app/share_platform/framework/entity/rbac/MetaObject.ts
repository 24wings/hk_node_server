import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { MetaField } from './MetaField';
import { MetaEntity } from '../../util/metadata/MetaEntity';
import { Prop } from '../../util/metadata/Field';
@Entity()
@MetaEntity()

export class MetaObject {
    @PrimaryGeneratedColumn()
    @Prop()
    metaId: number;

    @Column()
    @Prop()
    objectCode: string;
    @Column({ nullable: true })
    @Prop()
    objectName: string;

    @Column({ nullable: true })
    @Prop()
    tableName: string;
    @Column({ nullable: true })
    @Prop()
    isSingle: boolean;
    @Column({ nullable: true })
    @Prop()
    isCelledit: boolean;
    @Column({ nullable: true })
    @Prop()
    isShowNum: boolean;
    @Column({ nullable: true })
    @Prop()
    isFirstLoad: boolean;
    @Column({ nullable: true })
    @Prop()
    filter: string;
    @Column({ nullable: true, length: 4000 })
    @Prop()
    querySql: string;
    @Column({ nullable: true })
    @Prop()
    defaultOrder: string;
    @Column({ nullable: true })
    @Prop()
    bizIntercept: string;
    @Column({ nullable: true })
    @Prop()
    config: string;
    @Column({ nullable: true })
    @Prop()
    groupName: string;
    @Column({ nullable: true })
    @Prop()
    pkKey: string;
    @Column({ nullable: true })
    @Prop()
    parentKey: string;
    @OneToMany(_ => MetaField, metaField => metaField.metaObject, {
        cascade: true,
        eager: true
    })
    @JoinColumn()
    metaFields?: MetaField[];

}