import express  from "express";
const router=express.Router();
router.get('/test',(req,res)=>{
    res.send("this is a test route");
})
export default router