// there are three main functions methods
// call, bind, apply

// With call(), an object can use a method belonging to another object.

let Student={
    showInfo: function(){
        return (this.name_+" "+this.age);
    }
};

let employee={
    name_:"Akash",
    age:45,
}

let empInfo=Student.showInfo.call(employee);
console.log(empInfo);
// 🔥🔥🔥🔥🔥🔥🔥 important concept about arrow function and this🔥🔥🔥🔥🔥
// here we cannot use arrow function as showInfo, it gives undefined
// Arrow functions do NOT have their own this binding.
// The this inside the arrow function will refer to the this of 
// the Student object's enclosing scope.

// In regular function
// this is determined by how the function is called.
// When you use Student.showInfo.call(employee), the call() method explicitly 
// sets this inside showInfo to be the employee object.
// So, this.name_ correctly refers to employee.name_ ("Akash") 
// and this.age refers to employee.age (45).

// one can also called call method with arguments

let vehicle={
    showInfo:function(id,number){
        return this.firstName+" "+this.lastName+" "+id+" "+number;
    }
}

let Tata={
    firstName:"Tata",
    lastName:"Ferari",
}

let tataInfo=vehicle.showInfo.call(Tata,7676,"upy76784");
console.log(tataInfo);



// apply() method also working in similar way as call, the only difference u can pass
// arguments as an array rather than passing all seperately

let info=vehicle.showInfo.apply(Tata,["788787","hfghdgyd999"]);
console.log(info);

// now lets come to bind methods of js
// since bind is also used to borrow a methods from another object, so the basic difference between bind and call is
// let boundShowInfo = Student.showInfo.bind(employee);: Here, 
// we are not executing showInfo. Instead, we are creating a new function called boundShowInfo.
// This boundShowInfo function is a copy of Student.showInfo, 
// but with its this context permanently fixed to employee.

let bindInfoVehicle=vehicle.showInfo.bind(Tata,[785875,"hu0909"]);
console.log(bindInfoVehicle);// this will return a function 
// which is a new function and having its own this
console.log(bindInfoVehicle());







