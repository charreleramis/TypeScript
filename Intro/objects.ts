
// Type is aliases
type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean
}

 
let myUser: User = {
    _id: "12345",
    name: "cha",
    email: "cha@gmail.com",
    isActive: true
}

function customCreateUser(user: User) : User { // expecting to return the User as well
    return user;
}


// Expecting to merge some type

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}




function createUser({ name: string, age: number}): object {
    return {
    }
}

function createCourse({ course: string}): { status: boolean, price: number } {
    return {
        status: true,
        price: 120
    }
}


createUser({ name: 'charrel', age: 24});
createCourse({ course: 'BSIT'});


export {}