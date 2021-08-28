export class Person{
    message = 'default message';
    constructor(msg){
        this.message = msg;
    }
    saymessage(){
        return this.message;
    }
};

export class Human{
    canWalk(){
        return "I can Walk";
    }
};
