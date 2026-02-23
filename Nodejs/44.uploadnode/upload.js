// install multer
// multer npm search on browse - for html form to uload 

const xpress =require ('express');
const multer = require('multer');
const app= xpress();


const upload = multer({ //multer function
    storage: multer.diskStorage({
        destination:function(req,file,cb){ //cb,callback
            cb(null,"uploads") // folder name to upload
        },
        filename:function(req,file,cb){ 
            console.log(file);
            cb(null, file.fieldname +"-"+ Date.now()+".jpg") 
        }
    })
    
}).single("prateek");

app.post("/upload",upload,(req,res)=>{
    res.send("hogyi");
})

app.listen(4000);

//without multer there is large code. 