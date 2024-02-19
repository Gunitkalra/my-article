import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
const app= express()
app.use(express.json())
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('connected to the databse')
})
.catch((err)=>{console.log(err)})
app.listen(3005,(req,res)=>{
    console.log("server is running at port 3005")
})

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
