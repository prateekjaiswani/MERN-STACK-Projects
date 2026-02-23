console.log("hari om");

let a=10;
let b=0;

setTimeout(()=>{
    // console.log("second one");
    b=20; // this will run after bcoz of asynchronous
    //  programing
},2000)

console.log("third one");
console.log(a+b);//will give 10 but 30 should be there this is drawback
// of asynchronous

// Drawback 