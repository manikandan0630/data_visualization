const express=require("express")
const admin=require("../controllers/adminAuthControl")
const router=express.Router();

router.post("/api/auth/admin",admin.adminAuth);

module.exports=router;