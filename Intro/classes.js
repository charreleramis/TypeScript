var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "";
        this.apikey = "axca";
        this.pubKey = "public";
        this.email = email;
        this.name = name;
    }
    Object.defineProperty(User.prototype, "getApiKey", {
        get: function () {
            return this.apikey;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var hitest = new User('email', 'name');
var key = hitest.getApiKey;
console.log(key);
