 //install mongodb package   // npm i mongodb
 //connect
 //show

// const {MongoClient} = require ('mongodb');
// //  const {MongoClient} = require ('mongodb').MongoClient;//same thing
// const url='mongodb://localhost:27017'; 
// const database='youthwood-pictures';
// const Client = new MongoClient(url);  //connect with url
const dbConnect= require('./mongodb');

//30.
// async function getData(){   // async function which returns promis
//     let result=await Client.connect();  // connect with Client
//       // await for handling promise
//     let db= result.db(database);    //connect database
//     let collection=db.collection('content'); //connect collection
//     let response = await collection.find({}).toArray()   
//     // await collection.find({name:"prateek"}).toArray() // to find 
//     console.log(response); //find
// }

// getData(); // 

//31.read data from mongo db
// creating db connection file for handling time .


// dbConnect(); // no output
// console.log(dbConnect()); // will return promise to handle;

dbConnect().then((resp)=>{  // to handle promise // to use further 
resp.find().toArray().then((data)=>{
    console.log(data);
});
});

//wtf is promise , when doing heavy program . so time taken is more sothen it
// not waits also results in wrong output thats why ;

// const main =async ()=>{
//     let data = await dbConnect(); // this is easy way yarrrrr to handle promise
//     data =await data.find().toArray();
//     console.log(data);
// }
// main();


// insert Data 