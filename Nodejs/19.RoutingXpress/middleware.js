module.exports= reqFilter=(req,res,next)=>{ // MIDDLEWARE FUNCTION
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