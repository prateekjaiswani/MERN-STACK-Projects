// Middlewares are functions used with routes
//for making changes in requests and responses

const xpress= require('express');
const app=xpress();

const reqFilter=(req,res,next)=>{ // MIDDLEWARE FUNCTION
    if(!req.query.age){
        console.log("age chahiye");
        res.send("Please Provide age"); // if using send then next will not work
    }
    else if(req.query.age<18){
        res.send("bhag yaha se")
    }
    else{
        next();
    }
    // console.log('reqFilter');
    // next(); //doesnt work without next
}

app.use(reqFilter); 

app.get("/",(req,res)=>{
    res.send("haaan bhai");
})

app.listen(4000);

//26 . Types of Middlewares
// Application level middleware
// router-level middleware
// error-handling middleware
// built in middleware
// third-party middleware
