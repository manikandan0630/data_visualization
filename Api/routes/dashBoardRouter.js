const express=require("express")
const LineChart=require("../controllers/dashBoard")
const router=express.Router()

router.get("/api/line",LineChart.LineChart)


module.exports=router