class User {
    email: string;
    name: string;
    city: string = "";

    private readonly apikey: string = "axca";
    public  pubKey: string = "public";

    protected dbname: string = "MyDB";
    
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }

    // getter
    get getApiKey(): string {
        return this.apikey;
    }

    // setter function have nothing to return
    set setPubKey(newkey: string) {
        if(newkey === "") {
            throw new Error('Invalid key');
        }
        this.pubKey = newkey;
    }
}



class SubUser extends User {
    showDB() {
        console.log(`this is db name: ${this.dbname}`);
    }
}


const hitest = new User('email', 'name');
const key = hitest.getApiKey;
console.log(key);
 
