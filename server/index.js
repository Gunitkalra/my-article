import  express  from "express";


const app= express()
app.listen(3005,(req,res)=>{
    console.log("server is running at port 3005")
})