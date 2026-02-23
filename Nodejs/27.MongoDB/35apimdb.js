// major 4 - get post put delete
const xpress= require('express');
const dbConnect=require('./mongodb');
const app=xpress();
const mongodb = require('mongodb');
const cors =require('cors');


app.use(xpress.json()); // for getting through post //36.
app.use(cors())

app.get("/",async (req,res)=>{
    let data =await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    res.send(data);
})

//36. post api // no security as anything can be inserted without limits ...
// thats why mongoose is used further wooohooo.

app.post("/",async (req,res)=>{ //req used in this 
    let data=await dbConnect();
    let result =await data.insert(req.body); // from postman body
    console.log(req.body);   // for getting through body of postman 
    // now save this data through insert mongo db
    res.send(result);
})

//37. put api for update // post can be used but its standard and sexy

app.put("/:id",async (req,res)=>{
    let data = await dbConnect();
    let result =await data.updateOne(
        {_id: new mongodb.ObjectId(req.params.id)},{ //this can also be name: req.body.name
        //but if we want to change from input then through url we can give 
        // to change name in json, bcoz json and req can't be same
        // suppose we want to jsonref to something / or we want //
        //both of our will i.e params and body 
        //"/:name" // from url // and ref of url comes as 
        // req.params.name  ..... for localhost:4000/peter    
            $set:req.body
        }
    )

    console.log(result);
    res.send(await data.find().toArray());
})

//38.Delete api 

app.delete("/:id",async (req,res)=>{
    let data= await dbConnect();
    let result = await data.deleteOne({ // wahi cheez yar
       // name:req.params.id
        _id: new mongodb.ObjectId(req.params.id)
        //or "/:_id" // req.params //
         // this if we give id of element in url
         // what if client do not know id
         // first we will get id ... of element then we will delete 
         // but what is there are multiple element of same name 
         // mongoose comes in action broooooooooo....
    })
    console.log(result);
    res.send(await data.find().toArray());
})


app.listen(4000);

// get method we cannot pass body.
// body parser is not used instead express.json is used 
