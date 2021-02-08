"use strict";
var _a;
var firstName = "Mahmudul Hasan";
var lastName = "Reza";
var person = {
    firstName: firstName,
    lastName: lastName,
};
console.log(person.firstName);
console.log(person.lastName);
function createPerson(firstName, lastName, age) {
    var fullName = firstName + " " + lastName;
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        /*
        isSenior: function(){
            return age>60;
        }
        */
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = createPerson(firstName, lastName, 24);
console.log("firstName = ", p.firstName);
console.log("lastName = ", p.lastName);
console.log("fullName = ", p.fullName);
console.log("seniorCitizen = ", p.isSenior());
var ln = "last name";
var person2 = (_a = {
        "first name": "Daud Ul"
    },
    _a[ln] = "Islam",
    _a);
console.log(person2);
//# sourceMappingURL=object_literals.js.map