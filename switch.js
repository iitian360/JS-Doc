// introduce in ES1 1997

// it can help to replace multiple if
const day="Sunday";
switch(day){
    case "Monday":
        console.log("Workday");
        break;
    case "Tuesday":
        console.log('Work day with fun');
        break;
    case "Sunday":
        console.log('fun day');
        break;
    default:
        console.log('Boring day');
        break;
        
}

// important points to remember
// using break is important otherwise it will execute all
// cases from matching case
// If there is no break then the execution continues with the next case without any checks.

// grouping of cases

let number=56;// i want "yes" when number <=67
// otherwise no

switch(number){
    case 56:
        console.log('Yes');
        break;
    // or we can also use like this
    case 45:
    case 56:
    case 34:
    case 10:
        console.log('Yes less than 64');
        break;
    case 78:
    case 90:
    case 780:
        console.log('No it is bigger than 64');
    break;
    default:
        console.log('yep');
        break;
}

// also there are type checking as well in js



