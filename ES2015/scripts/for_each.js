"use strict";
var num = [60, 62, 73, 76, 81];
function arrayFunc(element, index, array) {
    console.log("arr[" + index + "]= " + element);
}
;
num.forEach(arrayFunc);
var myMap2 = new Map([
    ["id: ", "1105060"],
    ["Dept: ", "CSE"]
]);
function mapFunction(value, key, callmap) {
    console.log(key, " : ", value);
    console.log(myMap2 === callmap);
}
myMap2.forEach(mapFunction);
var newSet = new Set([42, 2, 63, 3, 4, 55, 35, 5]);
function setFunction(value, key, callset) {
    console.log(value);
    console.log(newSet === callset);
}
newSet.forEach(setFunction);
//# sourceMappingURL=for_each.js.map