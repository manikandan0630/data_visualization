const express=require("express")
const barchart=require("../controllers/dashBoard")
const router=express.Router()

router.get("/api/barchart",barchart.BarChart);

module.exports=router;