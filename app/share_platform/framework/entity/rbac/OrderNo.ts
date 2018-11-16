import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { MetaEntity } from '../../../framework/util/metadata/MetaEntity';
@MetaEntity()
@Entity()
export class OrderNo {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    currentKey: string;
    @Column()
    currentValue: number;
}