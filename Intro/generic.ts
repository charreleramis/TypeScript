
const score: Array<number> = [];
const names: Array<string> = [];


function identifyOne(val: boolean | string): boolean | string {
    return "";
}

function returnVal(val: any): any {
    return "";
}

// Your stating that the return data type depends on the data type of param
function identifyFour<Type>(num: Type): Type {
    return num;
}


// You can also state your own Type base on the interface

interface Traffic {
    name: string
}

// identifyFour<Traffic>({});


// the return should be T means one of the value of products params
function genericOne<T>(products: T[]): T {
    return products[3];
}


// add comma emphasize that T is not a jsx tag
const getMoreGenericOne = <T,>(products: T[]): T => {
    return products[1];
}



