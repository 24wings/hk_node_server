import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TransArea {
    @PrimaryGeneratedColumn()
    txnId: number;
    @Column()
    mktId: number;
    @Column()
    txnCode: string;
    @Column()
    txnName: string;


}
