const express=require("express")
const cors=require("cors")
const getConnection=require("./database/connection")
// const routes=require("./routes/dashboard_routes")
const routes1=require("./routes/adminAuthRouter")
const app=express()
app.use(express.json())
//cors policy
app.use(cors())
//database connection
getConnection()
//routing
// app.use(routes)
//admin auth
app.use(routes1)

//server
app.listen(4000,()=>{
    console.log("Server is running")
})