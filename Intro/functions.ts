
function addTwo(num: number) {
    return num + 2;
}

function getUpperCase(myName: string) {
    return myName.toUpperCase();
}


function signUpUser(name: string, email: string, password: string, isPaid: boolean) {
    
}


const loginUser = (username: string, password: string,  usertype: string = 'customer') => {
    console.log(username, password, usertype);
}


addTwo(5);
getUpperCase("charrel");
signUpUser('charrel', 'charrel@gmail.com', 'mypass', true);

loginUser('username', 'password');


export {}