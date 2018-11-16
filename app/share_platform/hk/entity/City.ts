import { MetaEntity } from '../../framework/util/metadata/MetaEntity';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@MetaEntity()
@Entity()
export class City {
    @PrimaryGeneratedColumn()
    /**城市Id*/
    id: number;
    /**城市代码*/
    @Column()
    code: string;
    /**城市名*/
    @Column()
    name: string;
    /**国家代码*/
    @Column()
    countryCode: string;
    @Column()
    countryName: string;
    @Column({ nullable: false })
    pinyin: string;
}
