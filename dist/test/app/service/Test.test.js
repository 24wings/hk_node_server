"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const assert = require("assert");
const bootstrap_1 = require("egg-mock/bootstrap");
describe('test/app/service/Test.test.js', () => {
    let ctx;
    before(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        ctx = bootstrap_1.app.mockContext();
    }));
    it('sayHi', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const result = yield ctx.service.test.sayHi('egg');
        assert(result === 'hi, egg');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdGVzdC9hcHAvc2VydmljZS9UZXN0LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaUNBQWlDO0FBRWpDLGtEQUF5QztBQUV6QyxRQUFRLENBQUMsK0JBQStCLEVBQUUsR0FBRyxFQUFFO0lBQzdDLElBQUksR0FBWSxDQUFDO0lBRWpCLE1BQU0sQ0FBQyxHQUFTLEVBQUU7UUFDaEIsR0FBRyxHQUFHLGVBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUU7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==