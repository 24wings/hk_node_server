"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const MetaObject_1 = require("./MetaObject");
let MetaField = class MetaField {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], MetaField.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaField.prototype, "objectCode", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], MetaField.prototype, "isQuery", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], MetaField.prototype, "isShow", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], MetaField.prototype, "isUpdate", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaField.prototype, "placeholder", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaField.prototype, "config", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaField.prototype, "fieldType", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaField.prototype, "fieldName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], MetaField.prototype, "recno", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaField.prototype, "alias", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], MetaField.prototype, "presetValue", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], MetaField.prototype, "displayWidth", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(_ => MetaObject_1.MetaObject, metaObject => metaObject.metaFields),
    typeorm_1.JoinColumn(),
    tslib_1.__metadata("design:type", MetaObject_1.MetaObject)
], MetaField.prototype, "metaObject", void 0);
MetaField = tslib_1.__decorate([
    typeorm_1.Entity()
], MetaField);
exports.MetaField = MetaField;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YUZpZWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3NoYXJlX3BsYXRmb3JtL2ZyYW1ld29yay9lbnRpdHkvcmJhYy9NZXRhRmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdGO0FBQ3hGLDZDQUEwQztBQUUxQyxJQUFhLFNBQVMsR0FBdEI7Q0FnQ0MsQ0FBQTtBQTlCRztJQURDLGdDQUFzQixFQUFFOztxQ0FDYjtBQUVaO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NkNBQ1A7QUFFcEI7SUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzswQ0FDVDtBQUVsQjtJQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3lDQUNWO0FBRWpCO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MkNBQ1I7QUFHbkI7SUFGQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzs4Q0FFTjtBQUVyQjtJQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3lDQUNYO0FBRWhCO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NENBQ1I7QUFFbkI7SUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzs0Q0FDUjtBQUVuQjtJQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3dDQUNaO0FBRWY7SUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt3Q0FDWjtBQUVmO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OENBQ047QUFFckI7SUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzsrQ0FDTDtBQUd0QjtJQUZDLG1CQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyx1QkFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztJQUMvRCxvQkFBVSxFQUFFO3NDQUNBLHVCQUFVOzZDQUFDO0FBOUJmLFNBQVM7SUFEckIsZ0JBQU0sRUFBRTtHQUNJLFNBQVMsQ0FnQ3JCO0FBaENZLDhCQUFTIn0=