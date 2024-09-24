const mongoose=require("mongoose")


const LineSchema=new mongoose.Schema({
    label:{
        type:String,
        required:true
    },
    revenue:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    }


})

const LineModel=mongoose.model("linedata",LineSchema)

module.exports=LineModel;