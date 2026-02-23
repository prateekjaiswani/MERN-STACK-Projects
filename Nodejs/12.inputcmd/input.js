//input from command line
const fs=require('fs');


const input=process.argv;

// add remove using if,else  input[2]==add or remove
//else invalid input(console mein)
// remove by fs.unLinkSync(input[3])

fs.writeFileSync(input[2],input[3]); 
console.log(process.argv[2]);
//process shows all process
//argv that we give to run example {node index.js yoyo}
//yoyo is 3rd element for argv to create file from that


console.log("yooo");