const xpress = require ('express');

const app=xpress();

app.get("",(req,res)=>{
    // res.send("<h1>Hari Om</h2>");//will return html;
    res.end();
})

app.get("/html",(req,res)=>{
    res.send(`
    <input type="text" placeholder=" Username" value="${req.query.name}"/>
    <a href="/json"><button>Click Me</button></a> 

    `)        //large html code  // <a>will create a link to other 
   
   
})

app.get("/json",(req,res)=>{
    res.send({
        name:"Prateek",
        number:"falana"

    })        //json
})

app.listen(3000);

// how will you get the query from chrome address in html display

// {/* <input type="text" value="${req.query.name}"/> */}