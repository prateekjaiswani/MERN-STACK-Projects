//EXPRESS JS
// Framework of nodejs
//more easy to create api html css part also 
// INstallation  - npm i express
// Again just require it

const express = require('express');
const app =express();  

app.get('',(req,res)=>{
    res.send('hello,home page hai ye')
})

app.get('/about',(req,res)=>{
    res.send('hello,about page');
})

app.listen(5000);