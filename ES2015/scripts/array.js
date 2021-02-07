"use strict";
var arrName = ["Reza", "Daud", "Hasib"];
console.log(arrName, "\n");
arrName.push("Sajin");
arrName.unshift("Ome"); //insert from starting
console.log(arrName, "\n");
arrName.pop(); //remove from last
arrName.shift(); //remove from first
console.log(arrName, "\n");
console.log(arrName.indexOf("Daud"));
// var rem = arrName.splice(1) //remove index 1 to all
// console.log(arrName);
var newArr = arrName.splice(1, 2); //remove from idex 1 , remove 2 times
console.log(arrName);
// copy by referance
var arrName2 = ["turna", "shafin", "priya", "ehsan"];
console.log("arrName2 = ", arrName2);
var newArr2 = arrName2;
console.log("newArr2 = ", newArr2);
newArr2.pop();
// remove from new Array affect to main array 
console.log("newArr2 = ", newArr2);
console.log("arrName2 = ", arrName2);
// copy by value
var arrName3 = ["turna", "shafin", "priya", "ehsan"];
console.log("arrName3 = ", arrName3);
var newArr3 = arrName3.slice(0, 4);
console.log("newArr3 = ", newArr3);
newArr3.pop();
// remove from new Array No affect to main array 
console.log("newArr3 = ", newArr3);
console.log("arrName3 = ", arrName3);
//# sourceMappingURL=array.js.map