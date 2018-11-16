import { Service } from "egg";
// import { ErrorResponse } from '../ErrorResponse';
// import { getMetaEntity } from '../../share_platform/framework/util/metadata/MetaEntity';
// import { getField } from '../../share_platform/framework/util/metadata/Field';
import { MetaObject } from '../../share_platform/framework/entity/rbac/MetaObject';
import { QueryParam } from '../../share_platform/framework/util/metadata/QueryParam';
import { SummaryParam } from '../../share_platform/framework/util/metadata/SummaryParam';
import { Paging } from '../../share_platform/framework/util/Paging';
// import { MetaField } from '../../share_platform/framework/entity/rbac/MetaField';
import { QueryCondition } from '../../share_platform/framework/util/metadata/QueryCondition';
require('../../share_platform/framework/entity/rbac/MetaField')
import { conn } from '../../typeorm';
import { PageParameter } from '../../share_platform/framework/util/metadata/Condition';
export default class extends Service {

    // sql查询，返给前端元数据，包括字段名，字段类型


    // 根据查询定义的code和查询条件列表返回不分页的sql语句
    public async getAllRecordsSQL(entityCode: string, queryParam: QueryParam): Promise<string> {
        console.error(entityCode);
        let metaObject = await conn.getRepository(MetaObject).findOne({ objectCode: entityCode }) as MetaObject;
        // this.service.framework.stq.entityDetail(entityCode).metaObject;
        if (!metaObject) throw new Error("找不到元数据");
        let conditions = queryParam.queryConditions;
        let filter: string = metaObject.filter;
        let userWhere = "";
        if (filter != null && filter.length != 0) {
            userWhere = " AND " + filter;
        }
        let conditionSql: string = this.getConditionsSQL(entityCode, conditions);
        let whereSQL = conditionSql + userWhere;
        if (whereSQL) {
            whereSQL = " AND (" + whereSQL + ")";
        }
        let sql = metaObject.querySql
        let attrs = queryParam.queryAttributes;
        if (attrs != null) {
            for (let attr of attrs) {
                if (attr.type.toUpperCase().includes("CHAR")) {
                    sql = sql.replace("@" + attr.key, "'" + attr.value + "'");
                } else if (attr.type.toUpperCase().includes("DATE")) {
                    sql = sql.replace("@" + attr.key, "'" + attr.value + "'");
                } else {
                    sql = sql.replace("@" + attr.key, attr.value);
                }
            }
        }
        ;
        sql = `SELECT * FROM (${sql}) T WHERE 1=1 ${whereSQL}`;
        return sql;
    }

    // 根据SQL取得数据的记录数
    // public getRecordCount(sql: string): number {
    //     return session.createQuery(sql).getResultList().size();
    // }

    // 根据查询定义的code和查询条件列表返回不分页的数据的记录数
    public async getRecordCount(entityCode: string, queryParam: QueryParam): Promise<number> {
        let reu = await this.getSummaryValues(entityCode, queryParam);
        return reu.length
    }

    public async getSummaryValues(entityCode: string, queryParam: QueryParam): Promise<any[]> {
        let sql: string = "select count(*) as _record_count #summary from ( #table ) as T";
        let summarys: SummaryParam[] = queryParam.summaryParam;
        if (summarys != null) {
            // let fieldBuffer = new StringBuffer();
            let str = "";
            for (let i = 0; i < summarys.length; i++) {
                let sp = summarys[i];
                // fieldBuffer.append("," + sp.getSumType() + "(" + sp.getFieldName() + ") as " + sp.getSumName());
                str += `,${sp.sumType} (${sp.fieldName}) as ${sp.sumName}`;
            }
            sql = sql.replace("#table", await this.getAllRecordsSQL(entityCode, queryParam))
                .replace("#summary", str);
        }
        // Query query = entityManager.createNativeQuery(sql);
        // Object object = query.getSingleResult();
        let object: any = [];
        if (Array.isArray(object)) {
            return object;
        } else {
            return [object];
        }
    }

    public getSummaryValuesSql(sql: string): any {
        return sql;
        // Query query = entityManager.createNativeQuery(sql);
        // Object object = query.getSingleResult();
        // return object;
    }

    // 根据查询定义的code和查询参数返回分页的sql语句
    public async getPageQuerySQL(entityCode: string, queryParam: QueryParam): Promise<string> {
        let page = queryParam.pageParam;
        // let queryConditions = queryParam.conditions;
        let sql = await this.getAllRecordsSQL(entityCode, queryParam);
        let dbType = "Mysql";
        if (page.pageIndex > 0 && !page.sortField) {
            let sqlFmt = "";
            if (dbType == "SQLServer") {
                sqlFmt = "select top #pagesize * from (select row_number() over(order by #id #sortType) as rownumber,* from #table) A where rownumber >(#pagesize*(#pageindex-1))";
            }
            if (dbType == "Oracle") {
                sqlFmt = "select top #pagesize * from (select row_number() over(order by #id #sortType) as rownumber,* from #table) A where rownumber >(#pagesize*(#pageindex-1))";
            }
            if (dbType == "MySQL") {
                sqlFmt = "select  * from #table order by #id #sortType limit #pagesize*(#pageindex-1),#pagesize";
            }
            sql = "(" + sql + ") AS T";
            sqlFmt = sqlFmt.replace("#table", sql).replace("#pageindex", page.pageIndex.toString())
                .replace("#pagesize", page.pageIndex.toString()).replace("#id", page.sortField as string);
            return sqlFmt;
        } else {
            return sql;
        }
    }

    getFieldValueString(fieldType: string, fieldValue: string): string {
        let s: string;
        if (fieldType.toUpperCase().includes("CHAR")) {
            s = "'" + fieldValue + "'"; // 字符串
        } else if (fieldType.toUpperCase().includes("DATE")) {
            s = "'" + fieldValue + "'"; // 字符串
        } else {
            s = fieldValue;
        }
        return s;
    }

    // 根据查询定义的code和JSON对象数据生成更新语句
    // private String getCRUDSql(String entityCode, JSONObject data, String CRUD) {
    //     MetaObject metaObject = metaObjectJPA.findByObjectCode(entityCode);
    //     List < MetaField > fields = metaFieldJPA.findByObjectCode(entityCode);
    //     Map < String, MetaField > fieldMap = fields.stream()
    //         .collect(Collectors.toMap(MetaField:: getFieldName, a -> a, (k1, k2) -> k1));
    //     Iterator < String > it = data.keys();
    //     String keyvalue = null;
    //     String sql = null;
    //     if ("UPDATE".equals(CRUD.toUpperCase())) {
    //         StringBuffer fieldBuffer = new StringBuffer();
    //         String keyName = metaObject.getPkKey();
    //         String fieldType = fieldMap.get(keyName).getFieldType();
    //         keyvalue = getFieldValueString(fieldType, data.getString(keyName));
    //         while (it.hasNext()) {
    //             String key = it.next();
    //             if (fieldMap.get(key) != null) {
    //                 fieldType = fieldMap.get(key).getFieldType();
    //                 if (fieldMap.get(key) != null && fieldMap.get(key).getIsUpdate()
    //                     && !metaObject.getPkKey().equals(key)) {
    //                     String fieldValue = getFieldValueString(fieldType, data.getString(keyName));
    //                     fieldBuffer.append(key).append("=").append(fieldValue).append(",");
    //                 }
    //             }
    //         }
    //         fieldBuffer.deleteCharAt(fieldBuffer.length() - 1);
    //         sql = "UPDATE #tablename SET #field_values WHERE #keyfield=#value";
    //         sql = sql.replace("#tablename", metaObject.getTableName()).replace(" #field_values", fieldBuffer.toString())
    //             .replace("#keyfield", metaObject.getPkKey()).replace("#value", keyvalue);
    //     }
    //     ;
    //     if ("INSERT".equals(CRUD.toUpperCase())) {
    //         StringBuffer fieldBuffer = new StringBuffer();
    //         StringBuffer valueBuffer = new StringBuffer();
    //         while (it.hasNext()) {
    //             String key = it.next();
    //             if (fieldMap.get(key) != null) {
    //                 String fieldType = fieldMap.get(key).getFieldType();
    //                 if (fieldMap.get(key) != null && fieldMap.get(key).getIsUpdate()) {
    //                     fieldBuffer.append(key).append(",");
    //                     String fieldValue = getFieldValueString(fieldType, data.getString(key));
    //                     valueBuffer.append(fieldValue).append(",");
    //                 }
    //             }
    //         }
    //         fieldBuffer.deleteCharAt(fieldBuffer.length() - 1);
    //         valueBuffer.deleteCharAt(fieldBuffer.length() - 1);
    //         sql = "INSERT #tablename(#fields) values(#values)";
    //         sql = sql.replace("#tablename", metaObject.getTableName()).replace(" #fields", fieldBuffer.toString())
    //             .replace("#values", valueBuffer.toString());

    //     }
    //     if ("DELETE".equals(CRUD.toUpperCase())) {
    //         String keyName = metaObject.getPkKey();
    //         String fieldType = fieldMap.get(keyName).getFieldType();
    //         keyvalue = getFieldValueString(fieldType, data.getString(keyName));
    //         sql = "DELETE FROM #tablename WHERE #field=#value";
    //         sql = sql.replace("#tablename", metaObject.getTableName()).replace(" #field", keyName).replace("#value",
    //             keyvalue);

    //     }
    //     return sql;
    // }

    // 根据查询定义的code和JSON对象数据对数据进行更新
    // @Transactional
    // public Integer updateSqlEntity(String entityCode, JSONObject data) {
    //     session = entityManager.unwrap(org.hibernate.Session.class);
    //     String sql = getCRUDSql(entityCode, data, "UPDATE");
    //     Query query = session.createNativeQuery(sql);
    //     return query.executeUpdate();
    // }

    // @Transactional
    // public Integer insertSqlEntity(String entityCode, JSONObject data) {
    //     session = entityManager.unwrap(org.hibernate.Session.class);
    //     String sql = getCRUDSql(entityCode, data, "INSERT");
    //     Query query = session.createNativeQuery(sql);
    //     return query.executeUpdate();
    // }

    // @Transactional
    // public Integer deleteSqlEntity(String entityCode, JSONObject data) {
    //     session = entityManager.unwrap(org.hibernate.Session.class);
    //     String sql = getCRUDSql(entityCode, data, "DELETE");
    //     Query query = session.createNativeQuery(sql);
    //     return query.executeUpdate();
    // }

    // 根据查询定义的code和查询参数返回数据对象
    public async queryPageEntity(entityCode: string, queryParam: QueryParam): Promise<Paging<any>> {
        if (!queryParam.queryConditions) queryParam.queryConditions = [];
        if (!queryParam.pageParam) queryParam.pageParam = new PageParameter();
        let paging = new Paging();
        //取得汇总及记录数数据
        let object: any[] = await this.getSummaryValues(entityCode, queryParam);
        let list = queryParam.summaryParam;
        for (let i = 1; i < object.length; i++) {
            list[(i - 1)].sumValue = (object[i]);
        }
        paging.summaryParam = list;
        paging.count = object[0];

        //取得分页数据，并打包成JSONObject
        let sql = await this.getPageQuerySQL(entityCode, queryParam);
        let result = await conn.query(sql);
        console.log(result);
        // session = entityManager.unwrap(org.hibernate.Session.class);
        //     ResultSet resultSet = session.doReturningWork(new ReturningWork<ResultSet>() {
        //         @Override
        //     public ResultSet execute(Connection connection) throws SQLException {
        //         PreparedStatement preparedStatement = connection.prepareStatement(sql);
        //         ResultSet resultSet = preparedStatement.executeQuery();
        //         return resultSet;
        //     }
        // });
        // let entityList: any[] = [];
        // try {
        //     ResultSetMetaData metaData = resultSet.getMetaData();
        //     Integer columnCount = metaData.getColumnCount();
        //     resultSet.first();
        //     while (!resultSet.isAfterLast()) {
        //         JSONObject entity = new JSONObject();
        //         for (int i = 1; i <= columnCount; i++) {
        //             switch (metaData.getColumnType(i)) {
        //                 case Types.BIGINT:
        //                     entity.put(metaData.getColumnName(i), resultSet.getInt(i));
        //                     break;
        //                 case Types.DATE:
        //                     entity.put(metaData.getColumnName(i), resultSet.getDate(i));
        //                     break;
        //                 case Types.DOUBLE:
        //                     entity.put(metaData.getColumnName(i), resultSet.getDouble(i));
        //                     break;
        //                 case Types.FLOAT:
        //                     entity.put(metaData.getColumnName(i), resultSet.getFloat(i));
        //                     break;
        //                 case Types.INTEGER:
        //                     entity.put(metaData.getColumnName(i), resultSet.getInt(i));
        //                     break;
        //                 case Types.SMALLINT:
        //                     entity.put(metaData.getColumnName(i), resultSet.getInt(i));
        //                     break;
        //                 case Types.TIME:
        //                     entity.put(metaData.getColumnName(i), resultSet.getTime(i));
        //                     break;
        //                 case Types.TIMESTAMP:
        //                     Timestamp time = resultSet.getTimestamp(i);
        //                     if (time != null) {
        //                         entity.put(metaData.getColumnName(i), new Date(time.getTime()).toGMTString());
        //                     } else {
        //                         entity.put(metaData.getColumnName(i), null);
        //                     }
        //                     break;
        //                 case Types.TINYINT:
        //                     entity.put(metaData.getColumnName(i), resultSet.getInt(i));
        //                     break;
        //                 case Types.VARCHAR:
        //                     entity.put(metaData.getColumnName(i), resultSet.getString(i));
        //                     break;
        //                 case Types.CHAR:
        //                     entity.put(metaData.getColumnName(i), resultSet.getString(i));
        //                     break;
        //                 case Types.BOOLEAN:
        //                     entity.put(metaData.getColumnName(i), resultSet.getBoolean(i));
        //                     break;
        //                 case Types.DECIMAL:
        //                     entity.put(metaData.getColumnName(i), resultSet.getBigDecimal(i));
        //                     break;
        //                 case Types.NUMERIC:
        //                     entity.put(metaData.getColumnName(i), resultSet.getBigDecimal(i));
        //                     break;
        //                 case Types.NVARCHAR:
        //                     entity.put(metaData.getColumnName(i), resultSet.getString(i));
        //                     break;
        //                 default:
        //                     entity.put(metaData.getColumnName(i), resultSet.getObject(i));
        //                     break;
        //             }
        //         }
        //         entityList.add(entity);
        //         resultSet.next();
        //     }
        //     paging.setRows(entityList);
        // } catch (Exception e) {
        //     e.printStackTrace();
        // }
        return new Paging();
    }
    public getFieldInfoBySql(sql: string): any[] {
        console.log(sql);
        // ResultSet resultSet = session.doReturningWork(new ReturningWork<ResultSet>() {
        //     @Override
        //     public ResultSet execute(Connection connection) throws SQLException {
        //         PreparedStatement preparedStatement = connection.prepareStatement(sql);
        //         ResultSet resultSet = preparedStatement.executeQuery();
        //         return resultSet;
        //     }
        // });
        // let object: any = null;
        let list: any[] = [];
        // try {
        //     ResultSetMetaData resultSetMetaData = resultSet.getMetaData();
        //     for (int i = 1; i <= resultSetMetaData.getColumnCount(); i++) {
        //         object = new JSONObject();
        //         object.put("field", resultSetMetaData.getColumnName(i));
        //         object.put("type", resultSetMetaData.getColumnTypeName(i));
        //         list.add(object);
        //     }
        // } catch (Exception e) {
        //     e.printStackTrace();
        // }
        return list;
    }

    public getJdbcTypeByJava(typeName: string): string {
        let jdbcType: string = "unknown type";
        switch (typeName) {
            case "java.lang.String":
                jdbcType = "VARCHAR";
                break;
            case "java.math.BigDecimal":
                jdbcType = "DECIMAL";
                break;
            case "java.lang.Boolean":
            case "boolean":
                jdbcType = "BIT";
                break;
            case "java.lang.Double":
            case "double":
                jdbcType = "DOUBLE";
                break;
            case "java.lang.Integer":
            case "int":
            case "java.lang.Long":
            case "long":
                jdbcType = "INTEGER";
                break;
            case "java.sql.Date":
                jdbcType = "DATE";
                break;
            case "java.lang.Object":
                jdbcType = "JAVA_OBJECT";
                break;
            case "byte[]":
                jdbcType = "BLOB";
                break;
            case "java.lang.Float":
            case "float":
                jdbcType = "FLOAT";
                break;
            case "java.sql.Time":
                jdbcType = "TIME";
                break;
            case "java.sql.Timestamp":
                jdbcType = "TIMESTAMP";
                break;
            case "java.lang.Byte":
            case "byte":
            case "short":
                jdbcType = "TIMESTAMP";
                break;
            default:
                jdbcType = "unknown type";
                break;
        }
        return jdbcType;
    }

    // sql查询，返给前端元数据，包括字段名，字段类型
    // public getMetaFieldInfo(entityCode: string): any[] {
    // let sql: string = this.service.framework.stq.entityDetail(entityCode)
    // sql = sql.replaceAll(":[_a-zA-Z\\d.]+", "NULL");
    // sql = sql.replaceAll("@@[_a-zA-Z\\d.]+", "NULL");
    // return getFieldInfoBySql(sql);
    // } 

    // 根据查询定义的code和查询条件列表返回组成的where条件
    private getConditionsSQL(entityCode: string, conditions: QueryCondition[]): string {
        console.log(entityCode, conditions)
        // let fields: MetaField[] = this.service.framework.stq.entityDetail(entityCode).metaFields;
        // console.log(entityCode, fields);
        // let fieldMap = new Map<string, MetaField>();
        // fields.forEach(field => fieldMap.set(field.fieldName, field));


        // let conditionSql: string = "";
        // if (conditions == null) {
        //     return "";
        // }
        // for (let item of conditions) {
        //     let field = fieldMap.get(item.field as string);
        //     if (field) {
        //         let fieldType = field.fieldType;
        //         let fieldValue = item.value.toString();
        //         if (fieldType.toUpperCase().includes("CHAR"))
        //             fieldValue = "'%" + item.value + "%'"; // 字符串就包个 '' 如 name like '张三%'
        //         if (fieldType.toUpperCase().includes("DATETIME")) {
        //             fieldValue = "'" + item.value + "'";
        //         }
        //         // 表示是求 name is null 或是 name not is null
        //         if (item.compare.toUpperCase().includes("NULL"))
        //             fieldValue = "";
        //         if (conditions.indexOf(item) < conditions.length - 1) {
        //             conditionSql = conditionSql + item.field + " " + item.compare + " " + fieldValue
        //                 + item.andOr;
        //         } else {
        //             conditionSql = conditionSql + item.field + " " + item.compare + " " + fieldValue;
        //         }
        //     }


        // }
        // return conditionSql;
        return '';
    }
} 