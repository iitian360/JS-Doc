// selfcalling function
(function alert_(){
    console.log('this is self calling function');
})();

// arrow function
const showName=()=>{
    return "Suraj";
}
console.log(showName());

// rese operator
const add=(...args)=>{
    let val=0;
    for(const x of args) val+=x;
    return val;
}

console.log(add(1,2,3));
console.log(add(1,2,4,5,5,5,3,3,34,4,5,3,5,5,45,3));

// we can pass function as argument
function showVal(name, id, add){
    return name+" "+ id+":"+ add(1,2,3,3,4,5);
    
}

console.log(showVal("Suraj","emp89",add));








