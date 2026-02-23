// Route level middleware
// works on single route,group of route, same middleware on different also

const xpress= require('express');
const app=xpress();
const reqFilter = require ('./middleware.js'); // For Common middleware
const route = xpress.Router(); // for multiple apply of middleware
route.use(reqFilter); // for multiple apply of middleware

// app.use(reqFilter); 

app.get("/",reqFilter,(req,res)=>{  // for single route middleware
    res.send("haaan bhai");
})

route.get("/about",(req,res)=>{
    res.send("haaan bhai");
})

app.get("/home",(req,res)=>{
    res.send("haaan bhai");
})


app.use('/',route);
app.listen(4000);