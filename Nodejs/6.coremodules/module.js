// COre modules are basic features pre built for using things 
// fs,Buffer,HTTP

// fs -file system

const fs=require('fs'); // Non global module;
//const fs=require('fs').writeFileSync. // we can write this type also if not 
//all wanted
console.log("hari om") ; // global modules.
fs.writeFileSync("hello.txt","Hari om file will be created")

console.log("->>",__filename); // shows 
console.log("->>",__dirname);  //shows