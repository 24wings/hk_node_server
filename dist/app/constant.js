"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoleType;
(function (RoleType) {
    RoleType[RoleType["GroupCompany"] = 1] = "GroupCompany";
    RoleType[RoleType["Market"] = 2] = "Market";
})(RoleType = exports.RoleType || (exports.RoleType = {}));
var EmployeeType;
(function (EmployeeType) {
    EmployeeType[EmployeeType["GroupCompany"] = 1] = "GroupCompany";
    EmployeeType[EmployeeType["Market"] = 2] = "Market";
})(EmployeeType = exports.EmployeeType || (exports.EmployeeType = {}));
var MarketStatus;
(function (MarketStatus) {
    MarketStatus[MarketStatus["Disabled"] = 0] = "Disabled";
    MarketStatus[MarketStatus["Active"] = 1] = "Active";
})(MarketStatus = exports.MarketStatus || (exports.MarketStatus = {}));
var EmployeeStatus;
(function (EmployeeStatus) {
    EmployeeStatus[EmployeeStatus["Disabled"] = 0] = "Disabled";
    EmployeeStatus[EmployeeStatus["Active"] = 1] = "Active";
})(EmployeeStatus = exports.EmployeeStatus || (exports.EmployeeStatus = {}));
exports.regex = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hcHAvY29uc3RhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFZLFFBR1g7QUFIRCxXQUFZLFFBQVE7SUFDaEIsdURBQWdCLENBQUE7SUFDaEIsMkNBQU0sQ0FBQTtBQUNWLENBQUMsRUFIVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUduQjtBQUVELElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtJQUNwQiwrREFBZ0IsQ0FBQTtJQUNoQixtREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUhXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBR3ZCO0FBQ0QsSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3BCLHVEQUFZLENBQUE7SUFDWixtREFBTSxDQUFBO0FBQ1YsQ0FBQyxFQUhXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBR3ZCO0FBQ0QsSUFBWSxjQUdYO0FBSEQsV0FBWSxjQUFjO0lBQ3RCLDJEQUFZLENBQUE7SUFDWix1REFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUhXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBR3pCO0FBRVUsUUFBQSxLQUFLLEdBQUcsRUFFbEIsQ0FBQSJ9