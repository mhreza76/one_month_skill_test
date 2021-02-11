interface Person{
    fname: string;
    lname: string;
    age?: number    //? for optional property
}

let employee1: Person = {
    fname: "Hasan",
    lname: "Reza",
    age: 30
}

let employee2: Person = {
    fname: "Hasan",
    lname: "Reza"
}
