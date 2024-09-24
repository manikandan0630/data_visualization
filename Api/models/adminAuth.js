const mongoose=require("mongoose")

//auth schema
const AuthSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

//auth model

const AuthModel=mongoose.model("admin",AuthSchema)

module.exports=AuthModel