const dbConnect = require ('./mongodb');

const deleteData =async () => {
    let data = await dbConnect();
    // let result =await data.find().toArray();
    let result =await data.deleteOne(
        {name:"prakhar"}); 
        // if not there check deleteCount and show that its not there
    if(result.acknowledged){
        console.log("deleted");
    };
}

deleteData()