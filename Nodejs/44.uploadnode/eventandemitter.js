// events and event emitter 
// event is signal sent and emitter is generator ..
// node js button can be only made by api

const xpress=require('express');
const EventEmitter = require ("events"); // its a class so CAPITAL
const app=xpress();
const event = new EventEmitter();

let count=0
event.on("countAPI",()=>{ // on and emit is important
    count++;
    console.log("event called", count); // count btaega or kya
})


app.get("/",(req,res)=>{
    res.send("events");
    event.emit("countAPI")
});

app.get("/search",(req,res)=>{
    res.send("eventsearch");
});

app.get("/upload",(req,res)=>{
    res.send("eventupload");
});


app.listen(4000);


