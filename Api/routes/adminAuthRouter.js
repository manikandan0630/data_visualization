const express=require("express")
const admin=require("../controllers/adminAuthControl")
const router1=express.Router();

router1.post("/api/auth/admin",admin.adminAuth);

module.exports=router1;