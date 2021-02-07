"use strict";
function greetPerson(name) {
    var greet;
    if (name === "Reza") {
        greet = "Hello Reza";
    }
    else {
        greet = "Hi there";
    }
    // let greet;
    // let is not possible to use before declearing 
    console.log(greet);
}
greetPerson("Rezaa");
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log("a = ", a, "b = ", b_1);
}
var a = 3;
console.log("a = ", a, "b = ", b);
//# sourceMappingURL=var_let.js.map