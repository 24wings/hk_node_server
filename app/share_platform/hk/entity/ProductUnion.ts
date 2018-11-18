import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MetaEntity } from '../../framework/util/metadata/MetaEntity';
import { Prop } from '../../framework/util/metadata/Field';

@MetaEntity()
@Entity()
export class ProductUnion {
    @PrimaryGeneratedColumn()

    @Prop()
    id: number;
    @Column()
    cityName: string;
    @Column()
    cityCode: string;
    @Column()
    cityPinyin: string;
    @Column()
    unionPrice: number;
    @Column()
    productId: number;

}