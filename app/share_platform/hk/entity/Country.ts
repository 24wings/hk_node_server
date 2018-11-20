import { MetaEntity } from '../../framework/util/metadata/MetaEntity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@MetaEntity()
@Entity()
export class Country {
    /**国家Id*/
    @PrimaryGeneratedColumn()
    id: number;
    /**国家代码*/
    @Column({ nullable: false, unique: true, length: 20 })
    code: string;
    /**国家名*/
    @Column({ nullable: false, unique: true, length: 20 })
    name: string;
}
