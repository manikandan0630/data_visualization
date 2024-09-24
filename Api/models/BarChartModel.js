const mongoose=require("mongoose")


//bar chart

const BarChart=new mongoose.Schema({
    label:{
        type:String,
        required:true
    },
    value:{
        type:String,
        required:true
    }
})

const BarChartModel=mongoose.model("bardata",BarChart)
module.exports=BarChartModel;