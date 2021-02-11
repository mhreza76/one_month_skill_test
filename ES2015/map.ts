let myMap = new Map();

myMap.set("fname", "Reza");
myMap.set("age", "24");
console.log(myMap.get("fname"));

let obj1 = {};
let obj2 = {};

myMap.set(obj1, 10);
myMap.set(obj1, 20);

console.log(myMap.size);
myMap.delete(obj1);
console.log(myMap.size);
console.log(myMap.has("fname"));


// for clear map 
// myMap.clear();

let myMap2 = new Map([
    ["id: ", "1105060"],
    ["Dept: ", "CSE"]
]);

for (let [key,value] of myMap2.entries()) {
    console.log(`${key} -> ${value}`);    
}
for (let entity of myMap2.entries()) {
    console.log(entity[0], entity[1]);    
}

for (let key of myMap2.keys()) {
    console.log(key);
}

for (let value of myMap2.values()) {
    console.log(value);
}

