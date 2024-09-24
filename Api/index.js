const express=require("express")
const cors=require("cors")
const getConnection=require("./database/connection")
const revenurouter=require("./routes/dashBoardRouter")
const adminrouter=require("./routes/adminAuthRouter")
const barouter=require("./routes/BarChartRoute")
const app=express()
app.use(express.json())
//cors policy
app.use(cors())
//database connection
getConnection()
//routing
app.use(revenurouter)
//admin auth
app.use(adminrouter)
//barchart
app.use(barouter);
//server
app.listen(4000,()=>{
    console.log("Server is running")
})