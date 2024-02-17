import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
const app= express()
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('connected to the databse')
})
.catch((err)=>{console.log(err)})
app.listen(3005,(req,res)=>{
    console.log("server is running at port 3005")
})