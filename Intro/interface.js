var newUser = {
    email: 'charrel@gmail.com',
    userId: 1,
    accountType: '',
    startTrail: function () { return 'trial started'; },
    getCoupon: function (username) { return "hello world"; }
};
newUser.email = 'charrel@gmail.com';
var msg = newUser.getCoupon;
console.log(msg);
console.log(newUser);
