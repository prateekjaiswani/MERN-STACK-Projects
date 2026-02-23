//making loop in ejs
// making header file
// show common header file

const xpress = require ('express');
const app=xpress();
const path=require ('path');
const publicpath=path.join(__dirname,'views');
// console.log(publicpath);

//set ejs as etmplate engine
app.set('view engine','ejs');

app.get("",(_,res)=>{
    const user={
        name:"prateek",
        email:"harii",
        skills:["haan","bhai","aagya","swaad","haan agya"]
    };
    res.render('profile',{user});
})
app.get("/login",(_,res)=>{
    res.render('login');
})
app.listen(4000);