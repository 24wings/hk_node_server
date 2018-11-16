import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Prop } from '../../util/metadata/Field';
import { MarketStatusEnum } from '../../enum/market_status.enum';
import { MetaEntity } from '../../util/metadata/MetaEntity';

@MetaEntity()
@Entity()
export class Market {
    @PrimaryGeneratedColumn()
    @Prop()
    mktId: number;
    @Column({ nullable: false, length: 30 })
    @Prop({ isQuery: true, isUpdate: true, isShow: true, alias: "市场名称" })

    mktName: string;
    @Column({ nullable: true, length: 20 })
    @Prop({ recno: 2, alias: '电话号码', isQuery: false, displayWidth: 30 })
    telephone: string;
    @Column({ nullable: true, length: 20 })
    @Prop({ isQuery: false, isUpdate: true })
    province: string;
    @Column({ nullable: true, length: 20 })
    @Prop({ isQuery: false, isUpdate: true })
    city: string;
    @Column({ nullable: true, length: 20 })
    @Prop({ isQuery: false, isUpdate: true })
    area: string;
    @Column('decimal', { nullable: true })
    @Prop({ isQuery: false, isUpdate: true })
    lat: number;
    @Column({ nullable: true })
    lng: number;
    @Column('enum', { enum: MarketStatusEnum, nullable: true })
    status: MarketStatusEnum = MarketStatusEnum.Active;
    @Column({ nullable: true })
    licenseUrl: string;
    @Column({ nullable: true })
    legalPeson: string;
    @Column({ nullable: true })
    @Prop({ isQuery: false, isUpdate: true })
    legalPhone: string;
    @Column({ nullable: true })
    menuIds: string;
    @Column({ nullable: true })
    @Prop()
    creatorId: number;
    @Column({ nullable: true })
    @Prop()
    auditorBy: string;
    @Column({ nullable: true })
    @Prop({ isQuery: false, isUpdate: true, config: JSON.stringify({ dateFormat: 'yyyy-MM-dd HH:mm:ss' }) })
    auditorTime: Date;
    @Column({ nullable: true })
    @Prop({ isQuery: true, isUpdate: true })
    auditorStatus: string;
    @Column({ nullable: true })
    @Prop()
    auditorDesc: string;
    @Column('decimal', { nullable: true })
    @Prop()
    balance: number = 100;

}
