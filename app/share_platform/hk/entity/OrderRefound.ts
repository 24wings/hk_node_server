import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { OrderRefoundStatusEnum } from '../enum/OrderRefoundStatus.enum';
import { MetaEntity } from '../../framework/util/metadata/MetaEntity';
import { Prop } from '../../framework/util/metadata/Field';
@MetaEntity()
@Entity()
export class OrderRefound {
    @PrimaryGeneratedColumn()
    @Prop()
    id: number;
    @Column()
    refundNo: string;
    // @Column()
    // title: "退票单号"
    @Column()
    orderId: number
    @Column({ nullable: true })
    orderNo: string
    @Column({ nullable: true })
    productId: number;
    @Column()
    productCode: string
    @Column({ comment: '去程航班号' })
    boundFlightCode: string
    @Column({ comment: '去程日期' })
    boundDate: Date;
    @Column({ comment: '返程航班' })
    returnFlightCode: string;
    @Column({ comment: '返程日期' })
    returnDate: Date;
    @Column({ comment: '行程信息', nullable: true })
    tripInfo: string;
    @Column('decimal', { comment: '成人价格' })
    price_a: number
    @Column('decimal', { comment: '儿童价格' })
    price_c: number;
    @Column({ comment: "退票成人数" })
    refundcount_a: number;
    @Column({ comment: '退票儿童数' })
    refundcount_c: number;
    @Column('decimal', { comment: '原订单金额' })
    amount: number;
    @Column('decimal', { comment: "平台退票金额", nullable: true })
    refund_amt: number;
    @Column('decimal', { comment: '供应商退票金额', nullable: true })
    supplier_amt: number;
    //   @Column({comment:'退票旅客客信息'})
    //   passengers:
    //     type: "array"
    //     items:
    //       $ref: "#/definitions/Passenger"
    //     example: ""
    @Column('enum', { comment: "状态", enum: OrderRefoundStatusEnum })
    status: OrderRefoundStatusEnum;
    @Column({ comment: "备注" })
    remark: string;
    @Column({ comment: '创建时间' })
    createTime: Date = new Date();
    // title: "备注"
    // type: "string"
    // description: ""
}