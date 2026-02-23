console.log("first");

setTimeout(()=>{
    console.log("works last")
},2000)

setTimeout(()=>{
    console.log("works last second");
},0)

//all functions which relate to c++ goes to node api instead of 
//call stack 
// first the call stack part runs 
// then node apis

console.log("second")
console.log("third")