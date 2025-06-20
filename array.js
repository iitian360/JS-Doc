// arrays in js are non-premitive data type
// how to create js array

// 1-->using Array constructor

let fruitList= new Array(1);
fruitList.push("Apple");
fruitList.push("Guava");

console.log(fruitList);
for(elem in fruitList) console.log(fruitList[elem]);
// 🔥🔥 here you can omit new keyword
let Student= Array("Akash","Rahul","Meera");
console.log(Student);



// 2--> array literals
let Car=[];
Car.push("BMW","TATA");
console.log(Car);
console.log(Car.length);

// adding an element to starting of the array
let numbers= new Array(2,4,56,7,23,4,12);
console.log(numbers);
// adding top
numbers.unshift(567);
console.log(numbers);
// push back
numbers.push(889);
numbers.push(56);
console.log(numbers);
// similarly pop
// now removing from top
numbers.shift();
console.log(numbers);

// finding the index of any element
console.log(numbers.indexOf(56));// going to return very first index ,, -1 if not found
// checking if variable name is an array
console.log(Array.isArray(numbers));


// 🔥🔥🔥 important array methods
// 1--> Array.toString--> return all element in comma seprated string
let employee=["Akash","Suraj","Rekha",23,65,"magic", true];
console.log(employee);
let str=employee.toString();
console.log(str, typeof(str));

// 2--> Array.at()--> return element of provided index
console.log(employee.at(3));// if no index provided then return first element by default
// 3--> Array.join()--> just like toString() convert all into string but here you can
// specify the any seperator rather than ',';
let employee1= employee.join('*');
console.log(employee1);

// 4--> delete employee[3] create undefined space in between array
// 5--> Array.concate method use to merge two array end by end

const finalArr= employee.concat(Car);
console.log(finalArr);

// 6--> Array.flat()-- use to flatten mutidimention array into one array
let multiD=[[2,3,4,5],[23,["ff","ffsf"],56,23],["suraj", "Ramesh",[3,4,5,6]]];
console.log(multiD);
let flattens=multiD.flat();
console.log(flattens);
// 7--> Array.flatMap()--> you can map with desired value

let numbers_10=numbers.flatMap(x=>(x=x*10));
console.log(numbers_10);

// 8--> Array.slice()--> to takeout a part of an array
let sliceNum=numbers.slice(1,5);//[----)
console.log(sliceNum);
console.log(numbers);

// 9--> Array.splice()-->














