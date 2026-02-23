const dbConnect = require ('./mongodb');

const update =async () => {
    let data = await dbConnect();
    // let result =await data.find().toArray();
    let result =await data.updateOne(
        {name:"prakhar"},{ // 
            $set:{ name:"Gud"} // update hoga 
        });
    console.log(result);
}
update();

// updateOne only does one // update does all of same name