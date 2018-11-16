"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
module.exports = () => {
    return function (ctx, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // console.log(ctx.headers);
            const startTime = Date.now();
            yield next();
            // 上报请求时间
            ctx.set("x-response-time", Date.now() - startTime + "ms");
        });
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2V0aW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL21pZGRsZXdhcmUvcmVzcG9uc2V0aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sVUFBZSxHQUFZLEVBQUUsSUFBSTs7WUFDdEMsNEJBQTRCO1lBQzVCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM3QixNQUFNLElBQUksRUFBRSxDQUFDO1lBQ2IsU0FBUztZQUNULEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM1RCxDQUFDO0tBQUEsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9