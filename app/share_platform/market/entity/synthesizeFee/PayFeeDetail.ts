import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';



@Entity()
export class PayFeeDetail {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    masterPayFeeId: number;
    @Column()
    memberARFeeId: number;
}