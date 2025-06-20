let result=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1);
    }, 1000);
})

result.then((res)=>{
    console.log(res);
    return res*=2;
    
}).then((res)=>{
    console.log(res);
    return res*=2;
}).then((res)=>{
    console.log(res);
    
}).finally(()=>{
    console.log('done');
    
})