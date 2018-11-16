import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class Params {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    paramName: string;
    @Column({})
    paramKey: string;
    @Column({ nullable: true, length: 100 })
    paramValue: string;
    type: string;
    @Column({ nullable: false })
    mktId: number;
    @Column({ nullable: true, length: 200 })
    addition: string;
    @Column({ nullable: true, length: 200 })
    defaultValue: string;
    @Column({ nullable: false })
    isLocal: number;
    @Column({ nullable: true, length: 200 })
    remark: string;

}
