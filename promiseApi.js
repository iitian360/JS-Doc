// There are 6 static methods in the Promise class. We’ll quickly cover their use cases here.
// Promise.all

// Let’s say we want many promises to execute in parallel and wait until all of them are ready.
// For instance, download several URLs in parallel and process the content once they are all done.
// That’s what Promise.all is for.
// let urls=[
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://api.github.com/users/jeresig'
// ]
// const getData=(urls)=>{
//     try{
//         let request=urls.map((u)=>fetch(u));
//         Promise.all(request)
//         .then((response)=>response.forEach((res)=> console.log(res.url, res.status)
//         ));
//     }catch(e){
//         alert(e);
//     }
// }

// getData(urls);



// Promise.allSettled()
// Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:

// {status:"fulfilled", value:result} for successful responses,
// {status:"rejected", reason:error} for errors.


let urls=[
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/ufd45fud'// wrong url
]

let getData2=(urls)=>{
    try{
        let request=urls.map((url)=>fetch(url));
        Promise.allSettled(request)
        .then((res)=>{
            res.forEach((e)=> console.log(e.status, e.urls),"hhh");
        }).catch((err)=> console.log(err));
    }catch(e){
        console.log(e);
        
    }
}

getData2(urls);


// Promise.race()==> similar to promise.all()
// but only wait for first promise to resolve and then return
// The first promise here was fastest, so it became the result. 
// After the first settled promise “wins the race”, all further results/errors are ignored.


// promise.any()//
// Similar to Promise.race, but waits only for the first fulfilled promise and 
// gets its result. If all of the given promises are rejected, then the returned 
// promise is rejected with AggregateError – a special error object that stores all 
// promise errors in its errors property.





