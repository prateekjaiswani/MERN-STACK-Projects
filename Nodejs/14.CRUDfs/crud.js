const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud')
//should be in the same folder in which the js file is
const name=`${dirPath}/apple.txt`;

// fs.writeFileSync(name,"haan");//  WRITE
//  fs.readFile(name,'utf8',(error,files)=>{
//     //without utf8 it shows encoded form
//     //buffer means a temporary memory location
//     console.log(files);
//  }) //READ

// fs.appendFile(name,"hari om this is changed",(error)=>{
//     if(!error) console.log("updated");
// })//UPDATE


// fs.rename(`${dirPath}/update.txt`,`${dirPath}/updated.txt`,(error)=>{
//     if(!error) console.log("file name updated");
// })//RENAME

// fs.unlinkSync(`${dirPath}/updated.txt`)//DELETE
