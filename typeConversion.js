// in js we all know it is weakly typed language but we can convert one var to other
// Boolean

// for "", null, nan, undefined string or number it gives false
var val="";
console.log(val);
val=Boolean(val);
console.log(val);

var val2="0";
val2=Boolean(val2);
console.log(val2);


// String conversion // 
// also false become "false", null become "null";
var num=35456344;
num=String(num);
console.log(typeof(num));


// number conversion
// Numeric conversion in mathematical functions and expressions happens automatically.
// For example, when division / is applied to non-numbers

console.log('34'/'17');// 2
var cal="354563463";
cal=Number(cal);
console.log(typeof(cal));
// If the string is not a valid number, the result of such a conversion is NaN
var cal2="878jjf8t886";
cal2=Number(cal2);
console.log(cal2);//NaN










