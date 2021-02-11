"use strict";
var _a;
var s = Symbol();
// console.log(s === s1);
console.log(typeof s);
console.log(s.toString());
var s2 = Symbol("Test");
var s3 = Symbol("Test");
console.log(s2 === s3);
var s4 = Symbol.for("RegSym");
var s5 = Symbol.for("RegSym");
console.log(s4 === s5);
console.log(Symbol.keyFor(s4));
console.log(Symbol.keyFor(s5));
var fname = Symbol("FirstName");
var personobj = (_a = {},
    _a[fname] = "Reza",
    _a);
console.log(Object.getOwnPropertyNames(personobj));
console.log(Object.getOwnPropertySymbols(personobj));
//# sourceMappingURL=symbols.js.map