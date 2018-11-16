"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (_) => {
    // let emp = app.controller.employee;
    // let api = {
    //   /** get ? */
    //   categoryInternalList: '/employee/category/internal-list',
    //   listInternalSujects: '/employee/subject/interal-list',
    //   /** get ?parentId */
    //   SubjectCustomList: '/employee/subject/custom-subjects',
    //   subjectCustomCreate: '/employee/subject/custome-create',
    //   subjectUpdate: '/employee/subject/custom-update',
    //   /**
    //    * method post 
    //    * body:{mktId,page,pageSize}
    //    */
    //   txnAreaList: '/employee/txnArea/list',
    //   txnAreaDelete: '/employee/txnArea/delete',
    //   txnAreaUpdate: '/employee/txnArea/update',
    //   txnAreaCreate: '/employee/txnArea/create',
    //   /** get ?txnId */
    //   txnAreaDetail: '/employee/txnArea/detail',
    //   categoryCreate: '/employee/category/create',
    //   categoryList: '/employee/category/list',
    //   categoryUpdate: '/employee/category/update',
    //   categoryDelete: '/employee/category/delete',
    //   login: '/employee/login',
    //   modifyPassword: "/api/modify-password",
    //   /**
    //    * 获取没有该角色的员工 
    //    * 
    //    * get ?marketId&employeeId
    //   */
    //   noRoleEmployee: '/employee/employee/no-role',
    //   /**
    //    * 批量添加角色
    //    * Post ?marketId&roleId&employeeIds
    //    */
    //   batAddRole: '/employee/role/bat-add-employee',
    //   /**
    //    * 列出角色下的所有员工
    //    * Get ?roleId&marketId
    //    */
    //   roleEmployees: '/employee/role/employees',
    // };
    // app.router.post(api.login, emp.login)
    //   .post(api.modifyPassword, emp.forgotPassword)
    //   .get(api.noRoleEmployee, emp.noRoleEmployees)
    //   .post(api.batAddRole, emp.batRoleAdd)
    //   .get(api.roleEmployees, emp.listRoleEmployees)
    //   .post(api.categoryList, emp.categoryList)
    //   .post(api.categoryCreate, emp.categoryCreate)
    //   .post(api.categoryUpdate, emp.txnAreaCreate)
    //   .post(api.txnAreaList, emp.txnAreaList)
    //   .get(api.txnAreaDelete, emp.txnAreaDelete)
    //   .post(api.txnAreaCreate, emp.txnAreaCreate)
    //   .post(api.txnAreaUpdate, emp.txnAreaUpdate)
    //   .get(api.txnAreaDetail, emp.txnAreaDetail)
    //   .get(api.categoryInternalList, emp.categoryInternalList)
    //   .get(api.listInternalSujects, emp.internalSubjectList)
    //   .get(api.SubjectCustomList, emp.subjectCustomList)
    //   .post(api.subjectCustomCreate, emp.subjectCreate)
    //   .post(api.subjectUpdate, emp.subjectUpdate)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUucm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvcm91dGUvZW1wbG95ZWUucm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBYyxFQUFFLEVBQUU7SUFDbEMscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsOERBQThEO0lBQzlELDJEQUEyRDtJQUUzRCx5QkFBeUI7SUFDekIsNERBQTREO0lBQzVELDZEQUE2RDtJQUM3RCxzREFBc0Q7SUFFdEQsUUFBUTtJQUNSLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsUUFBUTtJQUNSLDJDQUEyQztJQUMzQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQyxzQkFBc0I7SUFDdEIsK0NBQStDO0lBRy9DLGlEQUFpRDtJQUNqRCw2Q0FBNkM7SUFDN0MsaURBQWlEO0lBQ2pELGlEQUFpRDtJQUNqRCw4QkFBOEI7SUFDOUIsNENBQTRDO0lBQzVDLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyxPQUFPO0lBQ1Asa0RBQWtEO0lBQ2xELFFBQVE7SUFDUixjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLFFBQVE7SUFDUixtREFBbUQ7SUFDbkQsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsUUFBUTtJQUNSLCtDQUErQztJQUUvQyxLQUFLO0lBQ0wsd0NBQXdDO0lBQ3hDLGtEQUFrRDtJQUNsRCxrREFBa0Q7SUFDbEQsMENBQTBDO0lBQzFDLG1EQUFtRDtJQUNuRCw4Q0FBOEM7SUFDOUMsa0RBQWtEO0lBQ2xELGlEQUFpRDtJQUNqRCw0Q0FBNEM7SUFDNUMsK0NBQStDO0lBQy9DLGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsK0NBQStDO0lBQy9DLDZEQUE2RDtJQUM3RCwyREFBMkQ7SUFDM0QsdURBQXVEO0lBQ3ZELHNEQUFzRDtJQUN0RCxnREFBZ0Q7QUFDbEQsQ0FBQyxDQUFDIn0=