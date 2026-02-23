// remove extension from URL 
//.html
//make 404 page 

const xpress = require ('express');
const app=xpress();
const path=require ('path');
const publicpath=path.join(__dirname,'public');
// console.log(publicpath);

// app.use(xpress.static(publicpath));// will use static function from xpress
app.get("",(_,res)=>{
    res.sendFile(`${publicpath}/index.html`);
})
app.get("/about",(_,res)=>{
    res.sendFile(`${publicpath}/about.html`);
})
app.get("/home",(_,res)=>{
    res.sendFile(`${publicpath}/home.html`);
})
app.get("*",(_,res)=>{ // * will take anything in url after loacalhost
    res.sendFile(`${publicpath}/404.html`);
})
app.listen(3000);

// sendFIle method loads any file in the browser
