"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const assert = require("assert");
const bootstrap_1 = require("egg-mock/bootstrap");
describe('test/app/controller/home.test.ts', () => {
    it('should GET /', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const result = yield bootstrap_1.app.httpRequest().get('/').expect(200);
        assert(result.text === 'hi, egg');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdGVzdC9hcHAvY29udHJvbGxlci9ob21lLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaUNBQWlDO0FBQ2pDLGtEQUF5QztBQUV6QyxRQUFRLENBQUMsa0NBQWtDLEVBQUUsR0FBRyxFQUFFO0lBQ2hELEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBUyxFQUFFO1FBQzVCLE1BQU0sTUFBTSxHQUFHLE1BQU0sZUFBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=