"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
module.exports = () => {
    return (ctx, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        ctx.set("Access-Control-Allow-Origin", '*');
        ctx.set("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        ctx.set("Access-Control-Allow-Credentials", "true");
        // ctx.set("X-Powered-By", ' 3.2.1')
        if (ctx.method == "OPTIONS")
            ctx.body = 200;
        else {
            /*让options请求快速返回*/
            yield next();
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9taWRkbGV3YXJlL2NvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsTUFBTSxDQUFDLE9BQU8sR0FBRSxHQUFFLEVBQUU7SUFDaEIsT0FBTyxDQUFPLEdBQVcsRUFBQyxJQUFJLEVBQUMsRUFBRTtRQUVqQyxHQUFHLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTVDLEdBQUcsQ0FBQyxHQUFHLENBQ0wsOEJBQThCLEVBQzlCLHFFQUFxRSxDQUN0RSxDQUFDO1FBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBQ3ZFLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEQsb0NBQW9DO1FBQ3BDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxTQUFTO1lBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7YUFDdkM7WUFDSCxrQkFBa0I7WUFDbEIsTUFBTSxJQUFJLEVBQUUsQ0FBQztTQUNkO0lBQ0QsQ0FBQyxDQUFBLENBQUE7QUFDTCxDQUFDLENBQUEifQ==