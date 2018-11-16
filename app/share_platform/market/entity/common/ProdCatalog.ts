import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { TransArea } from './TransArea';

@Entity()
export class ProdCatalog {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: false, length: 20 })
    catName: string;
    @Column({ nullable: true })
    parentId: number;
    @Column({ nullable: true })
    isShow: boolean = true;
    @Column({ nullable: false, length: 20 })
    catCode: string;
    @Column({ nullable: true })
    txnId: number;

    @OneToOne(_ => TransArea)
    @JoinColumn()
    txn: TransArea;
    @Column({ nullable: true })
    mktId: number = 0;
    @Column({ nullable: true })
    linkId: number;


}
