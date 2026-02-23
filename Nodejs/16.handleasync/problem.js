// we will handle the async result 

//handle the late time of async in programming

//Creating Promise helps

let a=10;
let b=0;
let waitingdata= new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve(30);
},2000);
})

waitingdata.then((data)=>{ // helps to store after timeout..
    console.log(a+data); // will print the value 40 but after 2000; 
})