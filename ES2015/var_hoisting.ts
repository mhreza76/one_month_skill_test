function greetPerson(name){
    if(name === "Reza"){
        var greet = "Hello Reza";
    }else{
        var greet = "Hi there";   
    }
    console.log(greet);
    // var greet;
    // var can declear anywher but it will initializ in top autometic   
    // any var can accessable from any scope within the function
}
greetPerson("Reza");