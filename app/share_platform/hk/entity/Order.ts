import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MetaEntity } from '../../framework/util/metadata/MetaEntity';
import { ProductTargetEnum } from '../enum/ProductTarget';
// import { Decimal } from 'decimal.js'
import { Prop } from '../../framework/util/metadata/Field';
import { OrderStatusEnum } from '../enum/OrderStatus.enum';
@MetaEntity()
@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    @Prop()
    id: number;
    /**订单号:前缀+年月日+6位流水号A20180101000001*/
    @Column({ nullable: true })
    orderNo: string;
    @Column({ comment: "产品代码" })
    productCode: string;
    @Column()
    /**产品名称*/
    productName: string;
    /**产品目标*/
    @Column('enum', { enum: ProductTargetEnum })
    target: ProductTargetEnum;
    /**去程航班号*/
    @Column()
    boundFlightCode: string;
    /**去程日期*/
    @Column()
    boundDate: Date;
    /**返程航班*/
    @Column()
    returnFlightCode: string;
    /**返程日期*/
    @Column()
    returnDate: Date;
    @Column()
    /**行程信息*/
    tripInfo: string;
    /**成人价*/
    @Column('decimal')
    price_a: number;
    /**儿童价*/
    @Column('decimal')
    price_c: number;
    /**成人数*/
    @Column('integer')
    count_a: number;
    /**儿童数*/
    @Column()
    count_c: number;
    /**订单金额*/
    @Column('decimal')
    amount: number;
    /**乘客信息*/
    @Column()
    passengerInfo: string;
    /**乘客信息URL*/
    @Column()
    passengerUrl: string;
    /**订单状态*/
    @Column('enum', { enum: OrderStatusEnum })
    status: OrderStatusEnum;
    @Column({ comment: "会员id" })
    memberId: number;
    @Column({ nullable: true, comment: "备注" })
    remark: string;
    @Column({ comment: '会员名称' })
    memberName: string;
    @Column({ nullable: true })
    startCityId: number;
    @Column({ nullable: true })
    startCityName: string;
    @Column({ nullable: true })
    stopCityId: number;
    @Column({ nullable: true })
    stopCityName: string;
    @Column({ nullable: true })
    unionCityId: number;
    @Column({ nullable: true })
    unionCityName: string;
    @Column({ comment: '订单负责人', nullable: true })
    masterMemberId: number
}