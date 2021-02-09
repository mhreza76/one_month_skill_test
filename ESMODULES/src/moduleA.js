//import { fname as f, lname as l } from './moduleB.js';
//console.log(` ${f} ${l}`);

console.log("Module A log  1");
//import statement always hoiested to top

import gender, { fname, lname, obj } from './moduleB.js';
console.log("Module A log  2");
console.log(` ${fname} ${lname}`);

//imported veriable cant change value{its only read}
// But imported object can be writeable
obj.age = 24;
console.log(obj.age);


//Default Import
//we can use different name in default import veriable
import gen from "./moduleB.js";
console.log(gen);

import { default as g } from "./moduleB.js"
console.log(g);