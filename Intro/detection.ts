
interface User {
    name: string,
    age: number
}

interface Admin {
    role: string,
    userType: string,
    isAdmin: boolean
}

function userAdmin(account: User | Admin) {
    if("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}


function detection(params: string | string[]): string {
    return "";
}