// The nullish coalescing operator (??) was introduced in ECMAScript 2020 (ES11).
// The ?? operator returns the right-hand operand when the left-hand operand is null
//  or undefined, and otherwise returns the left-hand operand.

const Name=null ?? "Suraj";
console.log(Name);//suraj;

const val= 3456 ?? undefined;
console.log(val);// 3456
// console.log(a??b)
console.log(0 ?? 76);// 0 because it is not null or undefined

// we can also use sequence of ??

let pet=null;
let dog=null;
let pin=undefined;

console.log(pet??dog??pin??"Default");

// also can use nullish assignment

let num;
console.log(num??=100);
console.log(num);





