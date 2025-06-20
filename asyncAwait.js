// There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. 
// It’s surprisingly easy to understand and use.

// Async function

const getVal=async()=>{
    return 1;
}
console.log(getVal().then((r)=>console.log(r)));
console.log(typeof(getVal()));// object becaue it returns a promise which is an object

// we can also do the same like that

const data=async()=>{
    return Promise.resolve(1);
}
data().then((res)=> console.log(res)
);

// above two functions getVal and data working as same
// then there is a keyword await
// The keyword await makes JavaScript wait until that promise settles and returns its result.

const newData=async()=>{
    let promise= new Promise((res,rjt)=>{
        setTimeout(() => {
            res("done");
        }, 1000);
    })

    let result= await promise;
    console.log(result);
    
}

newData();








