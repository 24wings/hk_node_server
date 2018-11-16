"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const MetaField_1 = require("./MetaField");
let MetaObject = class MetaObject {
};
tslib_1.__decorate([
    typeorm_1.Generated(),
    tslib_1.__metadata("design:type", Number)
], MetaObject.prototype, "metaId", void 0);
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", String)
], MetaObject.prototype, "objectCode", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaObject.prototype, "objectName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaObject.prototype, "tableName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], MetaObject.prototype, "isSingle", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], MetaObject.prototype, "isCelledit", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], MetaObject.prototype, "isShowNum", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], MetaObject.prototype, "isFirstLoad", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaObject.prototype, "filter", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaObject.prototype, "querySql", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaObject.prototype, "defaultOrder", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaObject.prototype, "bizIntercept", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaObject.prototype, "config", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaObject.prototype, "groupName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaObject.prototype, "pkKey", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaObject.prototype, "parentKey", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(_ => MetaField_1.MetaField, metaField => metaField.metaObject, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    tslib_1.__metadata("design:type", Array)
], MetaObject.prototype, "metaFields", void 0);
MetaObject = tslib_1.__decorate([
    typeorm_1.Entity()
], MetaObject);
exports.MetaObject = MetaObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YU9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC9zaGFyZV9wbGF0Zm9ybS9mcmFtZXdvcmsvZW50aXR5L3JiYWMvTWV0YU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBbUc7QUFDbkcsMkNBQXdDO0FBR3hDLElBQWEsVUFBVSxHQUF2QjtDQXdDQyxDQUFBO0FBdENHO0lBREMsbUJBQVMsRUFBRTs7MENBQ0k7QUFFaEI7SUFEQyxnQ0FBc0IsRUFBRTs7OENBQ0w7QUFHcEI7SUFGQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzs4Q0FFUjtBQUVuQjtJQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzZDQUNSO0FBR25CO0lBRkMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NENBRVI7QUFFbkI7SUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzs4Q0FDTjtBQUVyQjtJQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzZDQUNQO0FBRXBCO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7K0NBQ0w7QUFFdEI7SUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzswQ0FDWDtBQUVoQjtJQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzRDQUNUO0FBRWxCO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Z0RBQ0w7QUFFdEI7SUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztnREFDTDtBQUV0QjtJQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzBDQUNYO0FBRWhCO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NkNBQ1I7QUFFbkI7SUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FDWjtBQUVmO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NkNBQ1I7QUFLbkI7SUFKQyxtQkFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMscUJBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7UUFDMUQsT0FBTyxFQUFFLElBQUk7S0FDaEIsQ0FBQztJQUNELG9CQUFVLEVBQUU7OzhDQUNZO0FBdkNoQixVQUFVO0lBRHRCLGdCQUFNLEVBQUU7R0FDSSxVQUFVLENBd0N0QjtBQXhDWSxnQ0FBVSJ9