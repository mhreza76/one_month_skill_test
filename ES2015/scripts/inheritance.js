"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        console.log(name + ", Person Constructor Called");
    }
    Person.prototype.getID = function () {
        return 10;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + ", Employee Constructor Called");
        return _this;
    }
    Employee.prototype.getID = function () {
        return 50;
        // for return parent class method
        // return super.getID();
    };
    return Employee;
}(Person));
var e = new Employee("Reza");
console.log(e.getID());
//# sourceMappingURL=inheritance.js.map