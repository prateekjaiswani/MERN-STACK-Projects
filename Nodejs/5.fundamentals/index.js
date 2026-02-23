const app= require('./app.js');

console.warn(app.z());

//filter function as always.

const arr=[1,2,3,4,5,6];
arr.filter((item)=>{
    if(item%2==0){
    console.log(item);
    }
});