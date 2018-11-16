"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class SingleTableQuery extends egg_1.Service {
    entityDetail(entityPath) {
        entityPath.split("/").pop();
        let entityModule = require(entityPath);
        let entity = entityModule[Object.keys(entityModule)[0]];
        console.log(entity);
    }
}
exports.default = SingleTableQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL3NlcnZpY2UvZnJhbWV3b3JrL3N0cS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE4QjtBQUM5QixzQkFBc0MsU0FBUSxhQUFPO0lBRWpELFlBQVksQ0FBQyxVQUFrQjtRQUMzQixVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUV0QyxJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFeEIsQ0FBQztDQUVKO0FBWkQsbUNBWUMifQ==