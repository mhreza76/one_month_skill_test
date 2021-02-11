"use strict";
var myMap = new Map();
myMap.set("fname", "Reza");
myMap.set("age", "24");
console.log(myMap.get("fname"));
var obj1 = {};
var obj2 = {};
myMap.set(obj1, 10);
myMap.set(obj1, 20);
console.log(myMap.size);
myMap.delete(obj1);
console.log(myMap.size);
console.log(myMap.has("fname"));
// for clear map 
// myMap.clear();
var myMap2 = new Map([
    ["id: ", "1105060"],
    ["Dept: ", "CSE"]
]);
for (var _i = 0, _a = myMap2.entries(); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    console.log(key + " -> " + value);
}
for (var _c = 0, _d = myMap2.entries(); _c < _d.length; _c++) {
    var entity = _d[_c];
    console.log(entity[0], entity[1]);
}
for (var _e = 0, _f = myMap2.keys(); _e < _f.length; _e++) {
    var key = _f[_e];
    console.log(key);
}
for (var _g = 0, _h = myMap2.values(); _g < _h.length; _g++) {
    var value = _h[_g];
    console.log(value);
}
//# sourceMappingURL=map.js.map