import { Service } from 'egg';
// import db = require('../share/model');
// import _ = require('lodash');
// import { Employee } from '../share/model/entity/employee';
export default class extends Service {

    // async  getOrCreateEmployeeAccount(epId: number, mktId: number) {
    //     let ep = await db.EmployeeAccount.findOne({ epId, mktId });
    //     if (!ep) {
    //         let epaccount = new db.EmployeeAccount();
    //         epaccount.epId = epId;
    //         epaccount.mktId = mktId;
    //         epaccount = await epaccount.save();
    //         return epaccount;
    //     } else {
    //         return ep;
    //     }
    // }
    // async getEmployeeByMktIdAndEpId(marketId: number, epId: number) {
    //     return db.Employee.findOne({ marketId, epId });
    // }
    // async getEmployeeMenus(employee: Employee) {
    //     let roleIds = employee.roleIds.split(',').filter(roleId => roleId != null || roleId != "");
    //     let roles = await db.Role.findByIds(roleIds);
    //     let menuIds: string[] = [];
    //     roles.forEach(role => menuIds.push(...role.menuIds.split(',')));
    //     menuIds = _.uniq(menuIds);
    //     return db.Menu.findByIds(menuIds);
    // }
}