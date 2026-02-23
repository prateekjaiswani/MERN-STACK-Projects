const mongoose=require ('mongoose')


const scheme=mongoose.Schema({
    name:String,
    art:String
})



module.exports=mongoose.model('contents',scheme);