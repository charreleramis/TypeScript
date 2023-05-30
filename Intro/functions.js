"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpperCase(myName) {
    return myName.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
}
var loginUser = function (username, password, usertype) {
    if (usertype === void 0) { usertype = 'customer'; }
    console.log(username, password, usertype);
};
addTwo(5);
getUpperCase("charrel");
signUpUser('charrel', 'charrel@gmail.com', 'mypass', true);
loginUser('username', 'password');
