
function addTwo(num: number): number { // in this line, your stating that the function expect to return number
    return num + 2;
}

function getUpperCase(myName: string) {
    return myName.toUpperCase();
}


function signUpUser(name: string, email: string, password: string, isPaid: boolean): object {   
    return {
        status: 'success'
    }
}

const updateUsername = (username: string): string => { // expect to return a string
    return "";
}


const consoleError = (errorMsg: string) : void => { // stating that the function dont return any
}

const handleError = (errorMsg: string): never => { // recommended for error handler
    throw new Error(errorMsg);
}


const loginUser = (username: string, password: string,  usertype: string = 'customer') => {
    console.log(username, password, usertype);
}




addTwo(5);
getUpperCase("charrel");
signUpUser('charrel', 'charrel@gmail.com', 'mypass', true);

loginUser('username', 'password');


export {}