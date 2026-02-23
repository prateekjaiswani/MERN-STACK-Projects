//41.
const xpress=require('express');
require('./config')
const app= xpress();
const scheme=require('./scheme1');

app.use(xpress.json());

app.post("/",async (req,res)=>{
    let data = new scheme(req.body)
    let result = await data.save();
    console.log(req.body);
    res.send(await scheme.find());
})


//42.
app.delete("/",async (req,res)=>{
    // "/:id" // _id: new mongodb.ObjectId(req.params.id)
        //or "/:_id" // req.params //
    let result = await scheme.deleteOne(req.body);
    console.log(req.body);
    res.send(await scheme.find());
})

app.put("/",async (req,res)=>{
    let result = await scheme.updateOne(
        req.body,{
            $set:{name:"hritik roshan",art:"Dancer"}
        }
    );
    console.log(req.body);
    res.send(await scheme.find());
})

app.get("/",async (req,res)=>{
    console.log(await scheme.find());
    res.send(await scheme.find());
})

app.listen(4000);


//id from query param only to delete ..

