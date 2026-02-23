//43. 
// search with single and multiple keys 
//test API

const xpress=require('express');
const app = xpress();
const scheme = require('./scheme1');
require('./mongoose')

app.use(xpress.json());

app.get("/search/:key",async (req,res)=>{
    let data = await scheme.find(   // regex
    {
        "$or":[
            {"name":{$regex:req.params.key}}
             //regex syntax , krke multiple field bhi kr skte
        ]    
    }
    )
    res.send(data);
})

app.listen(4000);

//post put delete can also search in api by regex 

