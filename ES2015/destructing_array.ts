let employee1 = ["Morium", "Munny", "Female"];
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



let [eName, ...elements] = employee1;
console.log(eName);
console.log(elements);

