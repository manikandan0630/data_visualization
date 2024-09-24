const AuthModel=require("../models/adminAuth")

//admin authentication
const adminAuth=async(req,res)=>{
    const {username,password}=req.body;
    // console.log(username,password)
  try {
    const login=await AuthModel.findOne({username})

    if(login.password==password){
        res.json({
            message:"success"
        })
    }
  } catch (error) {
    res.json({
        message:"false"
    })
  }

}

module.exports={
  adminAuth,
}