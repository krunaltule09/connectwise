import { Person } from "./person.js";

export class Hero extends Person{
    firstname = "default";
    lastname = "default";
    _secret = "my secret mission";
    constructor(fname, lname, nmessage){
        super( nmessage );
        this.firstname = fname;
        this.lastname = lname;
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    static sayVersion(){
        return "1001";
    }
    get secret(){
        return this._secret;
    }
    set secret(nsecret){
        this._secret = nsecret;
    }
};