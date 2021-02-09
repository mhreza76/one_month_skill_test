class Person{
    constructor(name){
        console.log(name + ", Person Constructor Called");

    }
    getID(){
        return 10;
    }

}

class Employee extends Person{
    constructor(name){
        super(name);
        console.log(name + ", Employee Constructor Called");
    }
    getID(){
        return 50;
        
        // for return parent class method
        // return super.getID();
    }
}

let e = new Employee("Reza");
console.log(e.getID());