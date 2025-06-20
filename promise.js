// By definition, a promise is an object that encapsulates the result of an asynchronous operation.

// A promise object has a state that can be one of the following:

// Pending
// Fulfilled with a value
// Rejected for a reason

// creating a promise

let promise=new Promise(function(resolve, rejected){
    setTimeout(() => {
        resolve("Success");
    }, 0);
})

// promise.then((res)=>{
//     console.log(res);
// })

console.log(typeof(promise));// type of object
// here reject and resolve is predefined function by js
//                   resolve--> fullfilled
//                  /
// status--> pending
//                  \
//                   failed--> rejected

// The executor should call only one reject or resolve and ingore further calls

let dataFetch=new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("success");
    }, 0);
    resolve("true");
    reject("failed");
});

dataFetch.then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('job done');
})

// here finally means cleanup, no matter what was the result.
// also one can use finally in any order no matter
// A finally handler doesn’t get the outcome of the previous handler (it has no arguments). This outcome is passed through instead, to the next suitable handler.
// If a finally handler returns something, it’s ignored.
// When finally throws an error, then the execution goes to the nearest error handler.




const getData=(url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let dataF=fetch(url);
            dataF.then(response=>{
                if(!response.ok) throw new Error("err");
            }).then(result=>resolve(result))
            .catch((err)=> reject(err));
        }, 1000);
    })
}

let data=getData("https://datafrom/hfjfdj/");
data.then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
})

console.log('hello');


