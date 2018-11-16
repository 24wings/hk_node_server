"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const path = require("path");
const typeorm_1 = require("typeorm");
const FrameworkEntityPath = path.resolve(__dirname, "../share_platform/framework/entity/**/**.ts");
const MarketEntityPath = path.resolve(__dirname, "../share_platform/market/entity/**.ts");
console.log(FrameworkEntityPath, '\n', MarketEntityPath);
exports.conn = new typeorm_1.Connection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "lwm740130",
    database: "dotnetcore",
    entities: [
        FrameworkEntityPath,
    ],
    synchronize: false,
    logging: true
});
exports.conn.connect();
/** 需要编写代理对象,已经注册的仓库直接获取 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvbW9kZWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0QkFBMEI7QUFDMUIsNkJBQThCO0FBQzlCLHFDQUFxQztBQUdyQyxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLDZDQUE2QyxDQUFDLENBQUM7QUFDbkcsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSx1Q0FBdUMsQ0FBQyxDQUFDO0FBQzFGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFOUMsUUFBQSxJQUFJLEdBQUcsSUFBSSxvQkFBVSxDQUFDO0lBRS9CLElBQUksRUFBRSxPQUFPO0lBQ2IsSUFBSSxFQUFFLFdBQVc7SUFDakIsSUFBSSxFQUFFLElBQUk7SUFDVixRQUFRLEVBQUUsTUFBTTtJQUNoQixRQUFRLEVBQUUsV0FBVztJQUNyQixRQUFRLEVBQUUsWUFBWTtJQUN0QixRQUFRLEVBQUU7UUFDUixtQkFBbUI7S0FHcEI7SUFDRCxXQUFXLEVBQUUsS0FBSztJQUNsQixPQUFPLEVBQUUsSUFBSTtDQUNkLENBQUMsQ0FBQztBQUVILFlBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUVmLDJCQUEyQiJ9