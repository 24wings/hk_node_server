"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (_) => {
    // let devApi = {
    //   subjectCreate: '/api/subject/create',
    //   subjectUpdate: '/api/subject/update',
    //   subjectDelete: '/api/subject/delete',
    //   subjectList: '/api/subject/list',
    //   categoryCreate: '/api/category/create',
    //   categoryList: '/api/category/list',
    //   categoryUpdate: '/api/category/update',
    //   categoryDelete: '/api/category/delete',
    //   /**
    //    * 元数据 的更新表 的数据更新
    //    * post
    //    * body{ metaObject,dataItem }
    //    */
    //   metaObjectDataUpdate: '/api/metaObject/data/update',
    //   /**
    //    *  interface FieldQueryOption {
    //                 field: string;
    //                 value: any;
    //                 compare: string;
    //       }
    //    * 获取元数据sql查询出来的数据,分页模式 
    //    * post 
    //    * body:{ page,pageSize,objectCode,query:FieldQueryOption[]}
    //    * return {results:[]}
    //    */
    //   metaObjectDataPage: '/api/metaObject/data/page',
    //   /**
    //    * 获取元数据列表
    //    * get
    //    * 
    //    * return {metaObjects}
    //    */
    //   metaObjectList: '/api/metaObject/list',
    //   /**
    //    * get 
    //    * ?objectCode
    //    * return {metaObject,fields}
    //    */
    //   metaObjectDetail: '/api/metaObject/detail',
    //   /** 
    //    * 元数据对象创建
    //    * post
    //    * body:{metaObject,fields}
    //   */
    //   metaObjectCreate: '/api/metaObject/create',
    //   /** 
    //    * 删除元数据 
    //    * get
    //    * ?objectCode
    //   */
    //   metaObjectDelete: '/api/metaObject/delete',
    //   /** 元数据更新 
    //    * post
    //    * body:{metaObject,fields}
    //    */
    //   metaObjectUpdate: '/api/metaObject/update',
    //   /**
    //    * 获取sql元数据
    //    * post
    //    * body:{sql}
    //    * {meta:[{field,type}]}
    //    **/
    //   sqlDetail: '/api/design/field',
    //   employeeDisabled: '/api/employee/disabled',
    //   employeeActive: '/api/employee/active',
    //   marketDisabled: '/api/market/disabled',
    //   marketActive: '/api/market/active',
    //   devCreate: '/api/dev/create',
    //   devUpdate: '/api/dev/update',
    //   devDelete: '/api/dev/delete',
    //   devPage: '/api/dev/page',
    //   /**
    //      * 
    //      * 
    //      */
    //   dbList: '/api/db/list',
    //   dbCreate: '/api/db/create',
    //   dbUpdate: '/api/db/update',
    //   dbDelete: '/api/db/delete',
    //   tableList: '/api/table/list',
    //   tableCreate: '/api/table/create',
    //   tableUpdate: '/api/table/update',
    //   tableDelete: '/api/table/delete',
    //   tableDetail: "/api/table/detail",
    //   tableListByDbId: "/api/table/listByDbId",
    //   templateList: '/api/template/list',
    //   templateCreate: '/api/template/create',
    //   templateUpdate: '/api/template/update',
    //   templateDelete: '/api/template/delete',
    //   groupCompanyEmployeeDetail: '/api/employee/gc-detail',
    //   /**
    //    * marketId=1&parentId=0
    //    */
    //   orgList: '/api/org/list',
    //   orgCreate: '/api/org/create',
    //   roleList: '/api/role/list',
    //   /**
    //  * 开发者登录接口
    //  * 
    //  * post
    //  * 
    //  * {username,password}
    //  * 
    //  * 
    //  * res:
    //  * {
    //  * dev:IDeveloper,
    //  * menus:IMenu[];
    //  * }
    //  */
    //   login: '/dev/login',
    //   menuList: '/api/menu/list',
    //   menuCreate: "/api/menu/create",
    //   menuUpdate: '/api/menu/update',
    //   menuDelete: '/api/menu/delete',
    //   menuDetail: '/api/menu/detail',
    //   /**
    //    *  根据menuCode获取菜单详细信息
    //    * get 
    //    * ?menuCode
    //    */
    //   menuDetailByMenuCode: '/api/menu/getByMenuCode',
    //   groupCompanyCreate: '/api/group-company/create',
    //   groupCompanyPage: '/api/group-company/page',
    //   groupCompanyDelete: '/api/group-company/delete',
    //   groupCompanyUpdate: '/api/group-company/update',
    //   marketCreate: '/api/market/create',
    //   marketPage: '/api/market/page',
    //   marketDelete: '/api/market/delete',
    //   marketUpdate: '/api/market/update',
    //   orgDetail: '/api/org/detail',
    //   orgDelete: '/api/org/delete',
    //   orgUpdate: '/api/org/update',
    //   /** ?mktId */
    //   marketDetail: '/api/market/detail',
    //   /* 集团的菜单列表  ?gcId*/
    //   groupCompanyMenu: "/api/group-company/menus",
    //   roleGcRoleChildren: '/api/role/gc-role-children',
    //   /** marketId */
    //   marketMenus: '/api/market/menus',
    //   roleCreate: '/api/role/create',
    //   roleUpdate: '/api/role/update',
    //   roleDelete: '/api/role/delete',
    //   employeeList: '/api/employee/list',
    //   employeeUpdate: '/api/employee/update',
    //   employeeDelete: '/api/employee/delete',
    //   employeeCreate: '/api/employee/create',
    //   paramList: '/api/param/list',
    //   paramCreate: '/api/param/create',
    //   paramDelete: '/api/param/delete',
    //   paramUpdate: '/api/param/update',
    // }
    // let devCtrl = app.controller.dev;
    // app.router.get('/', devCtrl.listPhoto);
    // .post(devApi.login, devCtrl.devLogin)
    // .get(devApi.menuList, devCtrl.menuList)
    // .post(devApi.menuCreate, devCtrl.menuCreate)
    // .post(devApi.menuUpdate, devCtrl.menuUpdate)
    // .post(devApi.marketCreate, devCtrl.marketCreate)
    // .get(devApi.marketPage, devCtrl.marketPage)
    // .get(devApi.marketDelete, devCtrl.marketDelete)
    // .post(devApi.marketUpdate, devCtrl.marketUpdate)
    // .get(devApi.dbList, devCtrl.userList)
    // .post(devApi.dbCreate, devCtrl.userCreate)
    // .post(devApi.dbUpdate, devCtrl.userUpdate)
    // .get(devApi.tableList, devCtrl.tableList)
    // .post(devApi.tableCreate, devCtrl.tableCreate)
    // .post(devApi.tableUpdate, devCtrl.tableUpdate)
    // .get(devApi.tableDelete, devCtrl.tableDeleete)
    // .get(devApi.tableDetail, devCtrl.tableDetail)
    // .get(devApi.tableListByDbId, devCtrl.tableListByDbId)
    // .get(devApi.templateList, devCtrl.templateList)
    // .post(devApi.templateCreate, devCtrl.templateCreate)
    // .post(devApi.templateUpdate, devCtrl.templateUpdate)
    // .get(devApi.templateDelete, devCtrl.templateDelete)
    // .get(devApi.menuDelete, devCtrl.menuDelete)
    // .get(devApi.marketDetail, devCtrl.marketDetail)
    // .get(devApi.orgList, devCtrl.orgList)
    // .post(devApi.orgUpdate, devCtrl.orgUpdate)
    // .post(devApi.orgCreate, devCtrl.orgCreate)
    // .get(devApi.orgDetail, devCtrl.orgDetail)
    // .get(devApi.orgDelete, devCtrl.orgDelete)
    // .get(devApi.roleList, devCtrl.roleList)
    // .get(devApi.marketMenus, devCtrl.marketMenus)
    // .post(devApi.roleCreate, devCtrl.roleCreate)
    // .post(devApi.roleUpdate, devCtrl.roleUpdate)
    // .get(devApi.roleDelete, devCtrl.roleDelete)
    // .get(devApi.employeeList, devCtrl.employeeList)
    // .post(devApi.employeeCreate, devCtrl.employeeCreate)
    // .post(devApi.employeeUpdate, devCtrl.employeeUpdate)
    // .get(devApi.employeeDelete, devCtrl.employeeDelete)
    // .get(devApi.paramList, devCtrl.paramList)
    // .get(devApi.paramDelete, devCtrl.paramDelete)
    // .post(devApi.paramCreate, devCtrl.paramCreate)
    // .post(devApi.paramUpdate, devCtrl.paramUpdate)
    // .get('/api/employee/detail', devCtrl.employeeDetail)
    // .get(devApi.devPage, devCtrl.devPage)
    // .post(devApi.devCreate, devCtrl.devCreate)
    // .post(devApi.devUpdate, devCtrl.devUpdate)
    // .get(devApi.devDelete, devCtrl.devDelete)
    // .get(devApi.marketDisabled, devCtrl.marketDisabled)
    // .get(devApi.marketActive, devCtrl.marketActive)
    // .get(devApi.employeeDisabled, devCtrl.employeeDisabled)
    // .get(devApi.employeeActive, devCtrl.employeeActive)
    // .post(devApi.sqlDetail, devCtrl.sqlDetail)
    // .post(devApi.metaObjectCreate, devCtrl.metaObjectCreate)
    // .get(devApi.metaObjectList, devCtrl.metaObjectList)
    // .get(devApi.metaObjectDetail, devCtrl.metaObjectDetail)
    // .post(devApi.metaObjectDataPage, devCtrl.metaObjectDataPage)
    // .get(devApi.metaObjectDelete, devCtrl.metaObjectDelete)
    // .post(devApi.metaObjectUpdate, devCtrl.metaObjectUpdate)
    // .post(devApi.metaObjectDataUpdate, devCtrl.metaObjectDataUpdate)
    // .get(devApi.menuDetail, devCtrl.menuDetail)
    // .get(devApi.menuDetailByMenuCode, devCtrl.menuDetailByMenuCode)
    // .post(devApi.categoryCreate, devCtrl.categoryCreate)
    // .get(devApi.categoryList, devCtrl.categoryList)
    // .get(devApi.categoryDelete, devCtrl.categoryDelete)
    // .post(devApi.categoryUpdate, devCtrl.categoryUpdate)
    // .post(devApi.subjectCreate, devCtrl.subjectCreate)
    // .get(devApi.subjectList, devCtrl.subjectList)
    // .get(devApi.subjectDelete, devCtrl.subjectDelete)
    // .post(devApi.subjectUpdate, devCtrl.subjectUpdate)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LnJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL3JvdXRlL2Rldi5yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFjLEVBQUUsRUFBRTtJQUNsQyxpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLDBDQUEwQztJQUMxQywwQ0FBMEM7SUFDMUMsc0NBQXNDO0lBQ3RDLDRDQUE0QztJQUM1Qyx3Q0FBd0M7SUFDeEMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1QyxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsUUFBUTtJQUNSLHlEQUF5RDtJQUN6RCxRQUFRO0lBQ1IscUNBQXFDO0lBQ3JDLGlDQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGlFQUFpRTtJQUNqRSwyQkFBMkI7SUFDM0IsUUFBUTtJQUNSLHFEQUFxRDtJQUNyRCxRQUFRO0lBQ1IsZUFBZTtJQUNmLFdBQVc7SUFDWCxRQUFRO0lBQ1IsNEJBQTRCO0lBQzVCLFFBQVE7SUFDUiw0Q0FBNEM7SUFDNUMsUUFBUTtJQUNSLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLFFBQVE7SUFDUixnREFBZ0Q7SUFDaEQsU0FBUztJQUNULGVBQWU7SUFDZixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLE9BQU87SUFDUCxnREFBZ0Q7SUFDaEQsU0FBUztJQUNULGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxnREFBZ0Q7SUFDaEQsZUFBZTtJQUNmLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsUUFBUTtJQUNSLGdEQUFnRDtJQUNoRCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLFNBQVM7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