import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { PayTypeEnum } from '../enum/PayType.enum';
// import { OrderStatusEnum } from '../../../framework/enum/order_status.enum';
import { CreateWayEnum } from '../enum/CreateWay.enum';
import { OrderDetail } from './OrderDetail';
import { Ignore } from '../../../framework/util/Ignore';

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    orderNo: string;
    @Column({ nullable: true })
    buyerMemId: number;//买方id
    @Column({ nullable: true })
    buyerCustId: number;//买方操作员
    @Column({ nullable: true })
    buyerInfo: string;//匿名买方信息
    @Column({ nullable: true })
    sellerMemId: number;//卖方id
    @Column({ nullable: true })
    sellerMemNo: string;
    @Column({ nullable: true })
    sellerCustId: number;//买方操作员
    /** 应付货款 */
    @Column('decimal', { nullable: true })
    apAmt: number;
    /**交易货款 */
    @Column('decimal', { nullable: true })
    payAmt: number;
    @Column('decimal', {})
    totalWeight: number;
    /** 买方手续费 */
    @Column('decimal', { nullable: true })
    buyerFee: number;
    @Column('decimal', { nullable: true })
    sellerFee: number;// 卖方手续费

    @Column('enum', { enum: PayTypeEnum, nullable: true })
    payType: PayTypeEnum
    // @Column('enum', { enum: OrderStatusEnum, nullable: true })
    status: string;
    // OrderStatusEnum = OrderStatusEnum.Active;//订单状态
    @Column('enum', { enum: CreateWayEnum, nullable: true })
    createWay: CreateWayEnum;//订单来源

    @Column()
    mktId: number;//所属市场id
    @Column({ nullable: true })
    transAreaId: number;
    @Column({ nullable: true })
    createTime: Date = new Date();//创建时间
    @Column({ nullable: true })
    creatorId: number;//创建人Id
    @Column({ nullable: true })
    creator: string;//创建人
    @Column({ nullable: true })
    actTime: Date = new Date();//结算时间
    @Column({ nullable: true })
    actorId: number;//结算员Id
    @Column({ nullable: true })
    actor: string;//结算员
    @Column({ nullable: true })
    remark: string;
    @OneToMany(_ => OrderDetail, detail => detail.order)

    @JoinColumn()
    orderDetails: OrderDetail[];
    @Ignore()
    payPassword: string;
} 