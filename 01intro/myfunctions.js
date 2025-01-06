"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    //do stuff
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    //do stuff
};
addTwo(5);
getUpper("hello");
//signUpUser(1, 2, true); //hepsinde hata olsa da sırayla gösteriyor. Bir hatayı çözünce diğerini görüyorsun.
signUpUser("Sena", "sena@.com", true);
loginUser("Sena", "sena@.com"); //function'a default value verdiğim için burada sorun çıkmıyor.
