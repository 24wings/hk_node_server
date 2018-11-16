import { PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
import { ProdCatalog } from './ProdCatalog';
import { PriceWayEnum } from '../enum/PriceWay.enum';
import { PriceUnitEnum } from '../enum/PriceUnit.enum';
import { ProductStatusEnum } from '../../../framework/enum/product_status.enum';


// @Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @OneToOne(_ => ProdCatalog)
    @JoinColumn()
    prodCat?: ProdCatalog;
    @Column()
    prodCatId: number;// 日志类型
    @Column()
    name: string;// 操作类型
    @Column('decimal', { nullable: true })
    price: number;
    createTime: Date = new Date();// 创建时间
    @Column('enum', { enum: PriceWayEnum })
    priceWay: PriceWayEnum;
    @Column('enum', { enum: PriceUnitEnum, nullable: true })
    priceUnit: PriceUnitEnum;// 计价单位
    @Column('decimal', { nullable: true })
    pcsWgt: number;// 单件重量
    @Column({ nullable: true })
    quantity: number;//数量
    @Column()
    memberId: number;// 所属会员
    @Column({ nullable: true })
    custId: number;// 创建者Id
    @Column()
    mktId: number;
    @Column('enum', { enum: ProductStatusEnum })
    status: ProductStatusEnum = ProductStatusEnum.Online;
}