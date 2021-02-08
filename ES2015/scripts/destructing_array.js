"use strict";
var employee1 = ["Morium", "Munny", "Female"];
/*
let [eName, age, gender= "Male"] = employee1;
console.log(eName);
console.log(age);
console.log(gender);
*/
/*
let [, ,gender] = employee1;
console.log(gender);
*/
var eName = employee1[0], elements = employee1.slice(1);
console.log(eName);
console.log(elements);
//# sourceMappingURL=destructing_array.js.map