//mongoose package to connect mongodb to node
//mongodb has some limitations 
//mongoose give us advance things after mongo db
// in mongo db we cannot use schemas and modulos and security tokens
// {if we dont want to add fifth field in object }
// {"price":100;} this will not be accepted in mongoose
//{validations}

//we will limit the categories keys of object
const mongoose = require ('mongoose');


const main =async () =>{
    await mongoose.connect("mongodb://localhost:27017/youthwood-pictures");
    const schema= new mongoose.Schema({
        name:String, // the limitation is set 
        // art:String // set
    });

    const artist = mongoose.model('content',schema); // contents is created.
    //collection with an s is important;
    let data = artist({name:"JADUGAR",art:"jhaatu"});
    //number of keys depend on schema with datatype
    //art doest not come 
    let result = await data.save();
    console.log(result)
}

// main();

//40.
//CRUD OPERATIONS
// Enter HONA SEEKH CHUKE

const schemaP= new mongoose.Schema({
        name:String, // the limitation is set 
        art:String // set
})

const saveindb= () =>{
    //save kara lena upar jaise schema jaise hi model bana k
}
mongoose.connect("mongodb://localhost:27017/youthwood-pictures");
const updatedb= async ()=>{
        const artist =mongoose.model('content', schemaP);
        let data = await artist.updateOne( // update hoga aur kya 
            {name:"rishita"},{
                $set:{name:"rishita singh somvanshi",art:"everything"}
            }
        );
        console.log(await data);
}


const deletedb=async ()=>{
    const artist =mongoose.model('content', schemaP);
        let data = await artist.deleteOne( // update hoga aur kya 
            {name:"prakhar"}
        );
        console.log(data);
}
// deletedb();

const finddb=async ()=>{
    const artist =mongoose.model('content', schemaP);
        let data = await artist.find(); //specific by {}
        console.log(data);
}
finddb();





