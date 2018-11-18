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
    cityId: number;
    @Column('decimal')
    unionPrice: number;
    @Column()
    productId: number;

}