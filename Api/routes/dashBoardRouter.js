const express=require("express")
const LineChart=require("../controllers/dashBoard")
const router=express.Router()

router.get("/api/line",LineChart.LineChart)
router.get("/api/bar",)


module.exports=router