let score: number | string = 33;

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

// here you can add a condition to have more types using condition "|"
let myUser: User | Admin = { name: 'charrel', id: 12, username: ''};



function getUserId(id: number | string) {
    if (typeof id === 'string') {
        id = id.toLowerCase();
    }
    console.log(`this is id ${id}`);
}


// union of items in the list
const strList: string[] = ["1", "2", "3"];
const intList: number[] = [1, 2, 3];
const unionTypeList: (number | string | boolean)[] = ["1", 1, true];





