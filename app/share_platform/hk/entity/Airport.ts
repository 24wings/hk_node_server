import { MetaEntity } from '../../framework/util/metadata/MetaEntity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Prop } from '../../framework/util/metadata/Field';

/**
 * @author liaoweimin
 * @version 1.0
 * @created 2018/9/22 15:03:47
 */

/**机场信息*/
@MetaEntity()
@Entity()
export class Airport {
    @PrimaryGeneratedColumn()
    /**机场Id*/
    id: number;
    @Prop()
    @Column()
    /**代码*/
    code: string;
    @Column()
    /**名称*/
    name: string;
    @Column()
    /**城市三字代码*/
    cityCode: string;

    // @Column({ nullable: false })
    // pinyin: string;
    @Column({ nullable: true })
    cityName: string;
    @Column({ nullable: false })
    cityId: number;
}
