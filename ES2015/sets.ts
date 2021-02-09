var mySet = new Set();
var ob1 = {};
var ob2 = {};

mySet.add("Hello");
mySet.add(1);
mySet.add(ob1);
mySet.add(ob2);
console.log(mySet.size);
console.log(mySet);

var newSet = new Set([1,2,3,3,4,5,5,5]);
console.log(newSet.size);
console.log(newSet);
newSet.delete(5);
console.log(newSet);


var chainSet = new Set().add("Hello").add("world");
console.log(chainSet.size);
console.log(chainSet);


