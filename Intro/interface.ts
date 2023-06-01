interface User {
    email: string,
    userId: number,
    accountType?: number | string, // ? stating that the accountType is optional
    startTrail() : string, // function inside the interface
    getCoupon(username: string) : string
}


// reopening of interface
interface User {
    githubToken: ""
}


interface AnotherInterface {

}

// all properties of User and AnotherInteface is included now on Admin
interface Admin extends User, AnotherInterface {
    role: "admin" | "learner"
}



const newUser: User = { 
    email: 'charrel@gmail.com', 
    userId: 1, 
    accountType: '', 
    startTrail: () => { return 'trial started'},
    getCoupon: (username: "Charrel") => { return "hello world" },

    githubToken: ""
}


// const newUser: Admin = { 
//     ... 
// }



newUser.email = 'charrel@gmail.com';
console.log(newUser);
