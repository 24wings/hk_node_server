import { PageParam } from './PageParam';
import { QueryCondition } from './QueryCondition';
import { QueryAttribute } from './QueryAttribute';
import { SummaryParam } from './SummaryParam';


/**
 * 前端用户点查询按钮传递过来的参数
 */

export class QueryParam {
    queryConditions: QueryCondition[] = [];
    summaryParam: SummaryParam[];
    pageParam: PageParam = new PageParam();
    /*
     * 查询参数HashMap，可以有多个参数 处理如select * from table where
     * field1=@fieldValue的情况,参数名为@fieldValue
     * 前端若想替换参数@fieldValue的值为1，则可以在queryAttributes中put("@fieldValue","1")
     */
    queryAttributes: QueryAttribute[];

}
