"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const db = require("../../model");
console.log(db);
class default_1 extends egg_1.Controller {
    entityDetail() {
        let { entity } = this.ctx.query;
        debugger;
        let queryParam = this.ctx.body;
        let data = this.service.framework.stq.entityDetail(entity);
        this.ctx.body = { ok: true, data: { entity, queryParam, data } };
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL2NvbnRyb2xsZXIvZnJhbWV3b3JrL3N0cS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUFpQztBQUNqQyxrQ0FBbUM7QUFFbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUdoQixlQUFxQixTQUFRLGdCQUFVO0lBQ25DLFlBQVk7UUFDUixJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDaEMsUUFBUSxDQUFDO1FBQ1QsSUFBSSxVQUFVLEdBQWUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO0lBQ3JFLENBQUM7Q0FDSjtBQVRELDRCQVNDIn0=