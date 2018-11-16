import { BaseAduitEntity } from './BaseAduitEntity';
import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn
} from 'typeorm';
import { MetaEntity } from '../../framework/util/metadata/MetaEntity';
import { ProductTypeEnum } from '../enum/ProcutType.enum';
import { SellTypeEnum } from '../enum/SellType.enum';
import { Flight } from './Flight';
import { AuditStatusEnum } from '../enum/AuditStatus.enum';
import { ProductTargetEnum } from '../enum/ProductTarget';
import { Prop } from '../../framework/util/metadata/Field';

/**产品信息*/
@MetaEntity()
@Entity({ name: "prods", synchronize: true })
export class Product extends BaseAduitEntity {
    @PrimaryGeneratedColumn()
    id: number;
    /**产品代码(出发地+到达地+航司2字代码+4位流水号 例:WUHBKKCZ0001)*/
    @Prop()
    @Column()
    code: string;
    /**产品名称*/
    @Column()
    name: string;
    /**产品宣传图片文件名*/
    @Column({ nullable: true })
    image: string;
    @Column({ nullable: true })
    /**国内航线*/
    isDomesticLine: boolean;
    @Column('enum', { enum: ProductTypeEnum })
    /**产品类别*/
    productType: ProductTypeEnum;
    @Column('enum', { enum: SellTypeEnum })
    /**销售方式*/
    sellType: SellTypeEnum;
    /**去程航班*/

    @ManyToOne(_ => Flight, { eager: true })
    @JoinColumn()
    boundFlight: Flight;
    /**回程航班*/
    // @Index({ unique: false, })
    @ManyToOne(_ => Flight, { eager: true })
    @JoinColumn()
    returnFlight: Flight;
    /**去程日期(逗号分隔字符数组)*/
    @Column()
    boundDates: string;
    @Column()
    /**行程天数*/
    tripDays: number;
    /**回程日期(逗号分隔字符数组)*/
    @Column()
    returnDates: string;
    @Column()
    /**机位数*/
    seatCount: number;
    @Column()
    /**剩余机位数*/
    restSeat: number;
    /**成人税费*/
    @Column('decimal')
    priceTax_a: number;
    /**儿童税费*/
    @Column('decimal')
    priceTax_c: number;
    /**供应商价格_成人*/
    @Column('decimal')
    priceSupply_a: number;
    @Column('decimal')
    /**供应商价格_儿童*/
    priceSupply_c: number;
    /**平台价格_成人*/
    @Column('decimal')
    priceSelf_a: number;
    /**平台价格_儿童*/
    @Column('decimal')
    priceSelf_c: number;
    /**代理商价格_成人*/
    @Column('decimal')
    price2B_a: number;
    /**代理商价格_儿童*/
    @Column('decimal')
    price2B_c: number;
    /**C端价格_成人*/
    @Column('decimal')
    price2C_a: number;
    /**C端价格_儿童*/
    @Column('decimal')
    price2C_c: string;
    /**销售规则*/
    @Column()
    saleRuler: string;
    @Column()
    /**成团率(百分数)*/
    teamRate: number;
    @Column()
    /**成行率(百分数)*/
    tripRate: number;
    /**价格目标群体*/
    @Column('enum', { enum: ProductTargetEnum })
    target: ProductTargetEnum;
    /**代理商(逗号分隔字符数组)*/
    @Column()
    buyers: string;
    /**审核状态*/
    @Column('enum', { enum: AuditStatusEnum })
    auditStatus: AuditStatusEnum;
    /**变动日志*/
    @Column({ nullable: true })
    changeLog: string;
}


