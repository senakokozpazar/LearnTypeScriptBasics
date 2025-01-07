"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Sena",
    email: "sena@.com",
    isActive: true
};
/*function createUser({ name: string, isPaid: boolean }) {}

let newUser = {
  name: "Sena",
  isPaid: false,
  email:"sena@.com"
}

createUser(newUser) //bu şekilde objeye email ekleyebiliyorum ama best practice değil.

createUser({
  name: "Sena",
  isPaid: false})

*/
function createCourse() {
    return {
        name: "React - The Complete Guide",
        price: 199
    };
}
var myUser = {
    _id: "123",
    name: "Sena",
    email: "sena@.com",
    isActive: false
};
myUser.email = "sena@.com";
