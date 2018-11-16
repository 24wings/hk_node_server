import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MetaObject } from './MetaObject';
import { MetaEntity } from '../../util/metadata/MetaEntity';
import { Prop } from '../../util/metadata/Field';
@MetaEntity()
@Entity()
export class MetaField {
    @PrimaryGeneratedColumn({ name: "id" })
    @Prop()

    id?: number;
    @Column({ nullable: true, })
    @Prop()
    objectCode?: string;
    @Column({ nullable: true, name: "isQuery" })
    @Prop()
    isQuery?: boolean;
    @Prop()
    @Column({ nullable: true, name: "isShow" })
    isShow?: boolean;
    @Prop()
    @Column({ nullable: true, name: "isUpdate" })
    isUpdate?: boolean;
    @Prop()
    @Column({ nullable: true, name: "placeholder" })
    placeholder?: string;
    @Prop()
    @Column({ nullable: true, name: "config" })
    config?: string;
    @Prop()
    @Column({ nullable: true, name: "fieldType" })
    fieldType?: string;
    @Prop()
    @Column({ nullable: true, name: "fieldName" })
    fieldName?: string;

    @Prop()
    @Column({ nullable: true, name: "recno" })
    recno?: number;
    @Prop()
    @Column({ nullable: true, name: "alias" })
    alias?: string;
    @Prop()
    @Column({ nullable: true, name: "presetValue" })
    presetValue?: string;

    @Prop()
    @Column({ nullable: true, name: "displayWidth" })
    displayWidth?: number;
    @ManyToOne(_ => MetaObject, metaObject => metaObject.metaFields, {})
    @JoinColumn()
    metaObject?: MetaObject;






}
