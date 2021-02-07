"use strict";
var getRegularvalue = function () {
    return 10;
};
console.log(getRegularvalue());
var getArrowvalue = function () {
    return 20;
};
console.log(getArrowvalue());
var getArrowvalue2 = function () { return 30; };
console.log(getArrowvalue2());
var getArrowvalue3 = function (num) { return num * 10; };
console.log(getArrowvalue3(5));
var getArrowvalue4 = function (salary, bonus) { return 10 * salary + bonus; };
console.log(getArrowvalue4(1000, 500));
console.log(typeof getArrowvalue4);
//# sourceMappingURL=arrow_function.js.map