const dbConnect = require('./mongodb');

const insert =async ( )=>{
    const db=await dbConnect();
    const result =await db.insertOne({ // after await result will be acknowledged
        name:"prakhar",
        art:"Dancing"
    });
    // const result =await db.insert([ // after await result will be acknowledged
    //     {name:"prakhar",art:"Dancing"},
    //     {name:"prakhar",art:"Dancing"}, // for multiple in arrays
    //     ]        );    
if(result.acknowledged){
    console.log("Inserted");
};
}

insert();