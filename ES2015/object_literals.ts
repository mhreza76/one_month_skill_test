let firstName = "Mahmudul Hasan";
let lastName = "Reza";

let person = {
    firstName,
    lastName,
};
console.log(person.firstName);
console.log(person.lastName);

function createPerson(firstName, lastName, age){
    let fullName = firstName + " " + lastName;
    return{
        firstName,
        lastName,
        fullName,
        /*
        isSenior: function(){
            return age>60;
        }
        */
        isSenior(){
            return age>60;
        }
    }
}
let p = createPerson(firstName, lastName, 24);
console.log("firstName = ", p.firstName);
console.log("lastName = ", p.lastName);
console.log("fullName = ", p.fullName);
console.log("seniorCitizen = ", p.isSenior());

let ln = "last name";
let person2 = {
    "first name": "Daud Ul",
    [ln]: "Islam"
};

console.log(person2);