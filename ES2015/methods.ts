class Person{
    constructor(name){
        this.name = name;
        console.log(name + " Constructor");
    }

    static staticMethod(){
        console.log("Static Method Called")
    }

    greeetPerson(){
        console.log("Hello " + this.name);
    }
}

let p1 = new Person("Reza");
Person.staticMethod();
p1.greeetPerson();