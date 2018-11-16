import { SummaryParam } from './metadata/SummaryParam';

export class Paging<T> {
    count: number;
    summaryParam: SummaryParam[];
    rows: T[];
}