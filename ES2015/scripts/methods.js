"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log(name + " Constructor");
    }
    Person.staticMethod = function () {
        console.log("Static Method Called");
    };
    Person.prototype.greeetPerson = function () {
        console.log("Hello " + this.name);
    };
    return Person;
}());
var p1 = new Person("Reza");
Person.staticMethod();
p1.greeetPerson();
//# sourceMappingURL=methods.js.map