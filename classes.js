// class in js is a blueprint to create object
class Student{
    constructor(name, age, id){
        this.name=name;
        this.age=age;
        this.id=id;
    }
    getInfo=()=>{
        console.log('My name is '+this.name+' and I am '+this.age+' years old having id '+this.id);
    }

    setInfo=(department)=>{
        this.department=department;
    }
    
}

let st1= new Student("Suraj",23,87995686);
console.log(st1);
st1.getInfo();
st1.setInfo("IT");
console.log(st1.department);

// now lets come to singlton class

// singleton class are class which only excuted once or have only one instence

let Payment=new class{
    constructor(referenceNum, message){
        this.referenceNum=referenceNum;
        this.message=message;
    }

    greet(){
        console.log(this.message);
    }
}(758476847686784,"Payement successful");// by using this paranthesis
// we ensure that it should be called only once

Payment.greet();


