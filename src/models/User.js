import { ValidationError } from "../utils/errors.js";

export class User {
    constructor({id,name,email,age}){
        this.id = id ;
        this.name = name;
        this.email = email;
        this.age = age ;
    }
    validate(){
        if (this.name.length < 2 || !this.name) throw new ValidationError("name is empty or < 2 characters")
        if (!this.email.includes("@") || !this.email.includes(".")) throw new ValidationError("email lacks '@' or '.'");
        if ( this.age < 1 || this.age > 120) throw new ValidationError("age is not between 1 and 120");
        if(isNaN(this.id) || this.id < 0 );
    }
    update(data){
        this.name = data.name;
        this.email = data.email;
        this.age = data.age;
        this.validate();
    }
    toJson(){
        let json = JSON.stringify({id:this.id,name:this.name,email:this.email,age:this.age});
        return json;
    }

    static parse(data){
        return JSON.parse(data)
    }
    
}


