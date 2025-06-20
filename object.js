// creating object with traditional method

let Student={
    name:"Suraj",
    l_name:"Patel",
    department:"IT",
    emp_id:8968965,
    email:"sp48996@gmail.com",
}

// access an object's element
console.log(Student.name)

// create object with new keyword
let user= new Object();
user.name="Akash";
user.findName=()=>{
    return user.name;
}

// console.log(user.name);
console.log(user.findName());
// create object with literals
let Vehicle={};
Vehicle.brand="Tata",
Vehicle.number="UP65VS7685",
Vehicle.state="UP",
Vehicle.getInfo=()=>{
    return Vehicle.brand+" "+Vehicle.number+" "+Vehicle.state;
}
console.log(Vehicle.getInfo());
// one can delete any property
delete Vehicle.state;
console.log(Vehicle.getInfo());



const MakeEmployee=(name,age,empId)=>{
    return {
        name:name,
        age:age,
        empId:empId// here this.EmpId undefined because this is used for global variable....
    };
}

let emp1=MakeEmployee("Suraj",23,56637);
console.log(emp1);
console.log(typeof(emp1));

// are object elements are ordered?
// The short answer is: “ordered in a special fashion”: integer properties are sorted, 
// others appear in creation order. The details follow.

let PhoneCode={
    "91":"india",
    "43":"Japan",
    "45":"America",
    "1":'US',
    list:["hjdsjs","jdjds","hfdfjsdf"],
}

// PhoneCode.list.push("akash");//just curious


for(key in PhoneCode){
    console.log(key, PhoneCode[key]);
}

// how to check property name in object
if("empId" in emp1){
    console.log('yes empid is present in emp1');
}










