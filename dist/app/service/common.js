"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const os = require("os");
class Alidayu extends egg_1.Service {
    constructor() {
        super(...arguments);
        this.regexp = {
            phone: /^1[3-9]\d{9}$/g
        };
    }
    getComputerInfo() {
        let cpus = os.cpus();
        return { cpus };
    }
}
exports.default = Alidayu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL3NlcnZpY2UvY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQThCO0FBQzlCLHlCQUEwQjtBQUMxQixhQUE2QixTQUFRLGFBQU87SUFBNUM7O1FBQ0UsV0FBTSxHQUFHO1lBQ1AsS0FBSyxFQUFFLGdCQUFnQjtTQUN4QixDQUFDO0lBS0osQ0FBQztJQUpDLGVBQWU7UUFDYixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQVJELDBCQVFDIn0=