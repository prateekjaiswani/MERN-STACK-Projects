const xpress=require('express');
const app = xpress();


// get page load

// request and response 

// server gives response even without request //
// client sends requests 

app.get("",(req,res)=>{
    console.log("data by browser",req.query);// data written in chrome address
    res.send("Welcome"+req.query.name)
    res.end()

});

app.listen(4200);