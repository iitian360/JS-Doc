// inheritence means a class can use methods and properties of another class

class Animal{
    
    constructor(legs, name){
        this.legs=legs;
        this.name=name;
    }
    info(){
        console.log('this is '+this.name+' and walks on '+this.legs+' legs');
    }
    static voice_(){
        console.log('Animals have various voices');
    }
}


class bird extends Animal{
    constructor(legs,name,color){
        super(legs,name);
        this.color=color;
    }

    fly(){
        console.log('this bird having '+this.color+' color'); 
    }
}


let bird1=new bird(2,"crow","black");
bird1.info();
bird1.fly();
bird1.voice_();
Animal.voice_();