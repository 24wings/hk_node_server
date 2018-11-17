import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MetaEntity } from '../../framework/util/metadata/MetaEntity';

@MetaEntity()
@Entity()
export class AirCompany {
    @PrimaryGeneratedColumn()
    /**航司Id*/
    id: number;
    @Column({ nullable: false })
    /**航司代码*/
    code: string;
    @Column({ nullable: false })
    /**航司全名*/
    name: string;
    // @Column({ nullable: false })
    /**航司简称*/
    // shortNam: string;

}
