var score = 33;
// here you can add a condition to have more types using condition "|"
var myUser;
function getUserId(id) {
    if (typeof id === 'string') {
        id = id.toLowerCase();
    }
    console.log("this is id ".concat(id));
}
// union of items in the list
var strList = ["1", "2", "3"];
var intList = [1, 2, 3];
var unionTypeList = ["1", 1, true];
