// In JavaScript, a closure is a function that references variables in the 
// outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.
// let name="yfudyu";
let Student=function(){
    let name="Suraj Patel";
    function info(){
        console.log(name);
    }
    return info;
}
let information=Student();
information();// here name is still accessible although student function
//exicuted and their scope variable gone














