"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const MetaEntity_1 = require("./MetaEntity");
const recnoKey = Symbol("recno");
const aliasKey = Symbol("alias");
const presetValueKey = Symbol("presetValue");
const placeholderKey = Symbol("placeholder");
const configKey = Symbol("config");
const displayWidthKey = Symbol("displayWidth");
const isQueryKey = Symbol("isQuery");
const isShowKey = Symbol("isShow");
const isUpdateKey = Symbol("isUpdate");
/**
 * 用于单表查询的装饰器
 *
 * @param value
 */
function Field(value = { recno: 0, isShow: false }) {
    Reflect.metadata(recnoKey, value.recno);
    Reflect.metadata(aliasKey, value.alias);
    Reflect.metadata(presetValueKey, value.presetValue);
    Reflect.metadata(placeholderKey, value.placeholder);
    Reflect.metadata(configKey, value.config);
    Reflect.metadata(displayWidthKey, value.displayWidth);
    Reflect.metadata(isQueryKey, value.isQuery);
    Reflect.metadata(isShowKey, value.isShow);
    return Reflect.metadata(isUpdateKey, value.isUpdate);
}
function getField(target, propertyKey) {
    let type = Reflect.getMetadata("design:type", target, propertyKey);
    console.log(type, type === Number);
    return {
        recno: Reflect.getMetadata(recnoKey, target, propertyKey),
        alias: Reflect.getMetadata(aliasKey, target),
        presetValue: Reflect.getMetadata(presetValueKey, target),
        placeholder: Reflect.getMetadata(placeholderKey, target),
        config: Reflect.getMetadata(configKey, target),
        displayWidth: Reflect.getMetadata(displayWidthKey, target),
        isQuery: Reflect.getMetadata(isQueryKey, target),
        isShow: Reflect.getMetadata(isShowKey, target),
        isUpdate: Reflect.getMetadata(isUpdateKey, target),
        fieldType: type
    };
}
exports.getField = getField;
let Greeter = class Greeter {
};
tslib_1.__decorate([
    Field({ recno: 0 }),
    tslib_1.__metadata("design:type", String)
], Greeter.prototype, "greeting", void 0);
Greeter = tslib_1.__decorate([
    MetaEntity_1.MetaEntity({ isShowNum: true, objectName: "gretrer" })
], Greeter);
let g = new Greeter();
console.log(getField(g, "greeting"));
console.log(MetaEntity_1.getMetaEntity(Greeter));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvc2hhcmVfcGxhdGZvcm0vZnJhbWV3b3JrL3V0aWwvbWV0YWRhdGEvRmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNEJBQTBCO0FBRTFCLDZDQUF5RDtBQUV6RCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM3QyxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDN0MsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMvQyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUd2Qzs7OztHQUlHO0FBQ0gsZUFBZSxRQUFtQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtJQUN6RCxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0RCxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pELENBQUM7QUFDRCxrQkFBeUIsTUFBVyxFQUFFLFdBQVc7SUFDN0MsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQztJQUNuQyxPQUFPO1FBQ0gsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUM7UUFDekQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztRQUM1QyxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDO1FBQ3hELFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUM7UUFDeEQsTUFBTSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztRQUM5QyxZQUFZLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDO1FBQzFELE9BQU8sRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUM7UUFDaEQsTUFBTSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztRQUM5QyxRQUFRLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO1FBQ2xELFNBQVMsRUFBRSxJQUFJO0tBQ2xCLENBQUM7QUFDTixDQUFDO0FBZkQsNEJBZUM7QUFJRCxJQUFNLE9BQU8sR0FBYjtDQUtDLENBQUE7QUFIRztJQURDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQzs7eUNBQ0Y7QUFGaEIsT0FBTztJQURaLHVCQUFVLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQztHQUNqRCxPQUFPLENBS1o7QUFNRCxJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDIn0=