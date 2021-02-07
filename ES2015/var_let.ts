function greetPerson(name){
    let greet;
    if(name === "Reza"){
        greet = "Hello Reza";
    }else{
        greet = "Hi there";   
    }
    // let greet;
    // let is not possible to use before declearing 
    console.log(greet);
}
greetPerson("Rezaa");

var a = 1;
var b = 2;
if(a === 1){
    var a = 10;
    let b = 20;
    console.log("a = ", a, "b = ", b);
}
// var a = 3; var can be declear manytimes in same scoope
console.log("a = ", a, "b = ", b);


