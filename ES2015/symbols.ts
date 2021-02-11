let s = Symbol();
// console.log(s === s1);
console.log(typeof s);
console.log(s.toString());


let s2 = Symbol("Test");
let s3 = Symbol("Test");
console.log(s2 === s3);


let s4 = Symbol.for("RegSym");
let s5 = Symbol.for("RegSym");
console.log(s4 === s5);
console.log(Symbol.keyFor(s4));
console.log(Symbol.keyFor(s5));

let fname = Symbol("FirstName");
let personobj = {
    [fname]: "Reza";
};
console.log(Object.getOwnPropertyNames(personobj));
console.log(Object.getOwnPropertySymbols(personobj));