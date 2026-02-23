const fs=require('fs');

// fs.writeFileSync("apple.txt", "haan ");//but how multiple files are created 

//by loop

const path=require('path');

const dirPath=path.join(__dirname); //will join path in dirPath
//whatever path you want just put ',' and write file name
//path.join(__dirname,'13.showfiles')//should be inside current directory
// console.log(dirPath);

// for(let i=0;i<5;i++){
//     // fs.writeFileSync("hello.text","a"); //will create single file only
//     // fs.writeFileSync("hello"+i+".txt","multiple files created");
//     //also same neeche 
//     // fs.writeFileSync(`hello${i}.txt`,"multiple files created");
//     //whatif in the desired path
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","multiple files created");
//     fs.writeFileSync(`${dirpath}hello${i}.txt`,"multiple files created");
// }

//READ DIRECTORY

fs.readdir(dirPath,(error,files)=>{
    console.log(files); //will show files 
    //also
    // files.forEach(element => {
    //     console.log("filename is :->"element);//same thing
    // });
});

//we cannot access files outside the current File.....
// for security reasons  <3, <3,<3