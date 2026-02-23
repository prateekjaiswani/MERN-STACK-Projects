// Template engine -to create Dynamic pages npm package
//dynamic pages includes database and css and changes in pages

//EJS is most useful package in template engine -viewa folder is important
//nodejs used for API 95% dynamic websites are used 5% only 

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
        email:"harii"
    };
    res.render('profile',{user});
})

app.listen(4000);