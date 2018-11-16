import { BaseAduitEntity } from './BaseAduitEntity';
import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { MetaEntity } from '../../framework/util/metadata/MetaEntity';

/**
 * 航司：自动从航班号带出 航班号: [出发信息] 出发机场:三字代码查询 出发时间:当地时间 [经停信息] 经停机场: 到达时间:当地时间 经停时长:分钟数
 * [到达信息] 到达机场: 到达时间:当地时间 +天数:-1 班次信息：出发日期规则
 * @author 廖为民
 * @version 1.0
 * @updated 2018-9-22 15:03:47
 */
/**航班信息*/
@MetaEntity()
@Entity()
export class Flight extends BaseAduitEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    /**航班代码(航司2字代码+4字航班号*/
    code: string;
    @Column()
    /**航班信息*/
    flightInfo: string;
    @Column()
    /**航司二字代码*/
    airCompanyCode: string;
    @Column({ nullable: true })
    /**航司名称*/
    airCompanyName: string;
    @Column()
    /**出发机场三字代码*/
    startAirportCode: string;
    @Column()
    startCityCode: string;

    @Column()
    /**出发机场名称*/
    startAirportName: string;
    @Column()
    /**出发时间*/
    startTime: Date;
    @Column()
    /**经停机场三字代码*/
    stopAirportCode: string;
    @Column()
    /**经停机场名称*/
    stopAirportName: string;
    @Column()
    stopCityCode: string;
    @Column()
    /**经停到达时间*/
    stopTime: Date;
    @Column()
    /**经停时长(分钟数)*/
    stopMinutes: number;
    @Column()
    /**到达机场三字代码*/

    endAirportCode: string;
    @Column()
    /**到达机场名称*/
    endAirportName: string;
    @Column()
    /**到达时间*/
    endTime: Date;
    @Column()
    /**到达时间加减天数*/
    plusDays: number;


}
