import { MetaEntity } from '../../framework/util/metadata/MetaEntity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@MetaEntity()
@Entity()
export class Country {
    /**国家Id*/
    @PrimaryGeneratedColumn()
    id: number;
    /**国家代码*/
    @Column()
    code: string;
    /**国家名*/
    @Column()
    name: string;
}
