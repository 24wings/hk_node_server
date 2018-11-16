import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { Order } from './Order';
import { PriceUnitEnum } from '../enum/PriceUnit.enum';
import { PriceWayEnum } from '../enum/PriceWay.enum';

@Entity()
export class OrderDetail {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(_ => Order, order => order.orderDetails)
    @JoinColumn({ referencedColumnName: "id" })
    order: Order;
    @Column({ nullable: true })
    productId: number;
    @Column({ nullable: true })
    productName: string;
    @Column()
    prodCatName: string;
    @Column()
    prodCatId: number;
    @Column('decimal')
    /**件数 */
    qty: number;

    @Column('decimal', { nullable: true })
    pcsWgt: number;//件重
    @Column('decimal', { nullable: true })
    grossWgt: number;//毛重
    @Column('decimal', { nullable: true })
    tareWgt;//皮重
    @Column('decimal')
    /**重量 */
    weight: number;
    @Column('decimal', { nullable: true })
    price: number;
    @Column('decimal')
    amount: number;
    @Column('enum', { enum: PriceUnitEnum, nullable: true })
    priceUnit: PriceUnitEnum;
    @Column('enum', { enum: PriceWayEnum })
    priceWay: PriceWayEnum;
    @Column()
    orderId: number;



}