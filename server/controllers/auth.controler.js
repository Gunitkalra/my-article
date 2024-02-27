import User from '../models/user.models.js'
import jwt from 'jsonwebtoken'
import {errorHandler} from '../utills/error.js'
import bcryptjs from 'bcryptjs'
export const signup=async(req,res,next)=>{
const {username,email,password}= req.body
if (!username || !email|| !password||username===''||email===''||password===''){
    return next(errorHandler(400,'all field are required'))
}
 const hashedpassword= bcryptjs.hashSync(password,10)
const newUser= new User ({
    username , email , password: hashedpassword,
})
try{
    await newUser.save()
    res.json('user created')
}
catch(error){
    next(error)
}
}
 export const signin=async( req,res,next)=>{
    const {email,password}=req.body
    if(!email || !password || email==='' || password===""){
        next(errorHandler(400,'all feild are required'))
    }
    //find user by email
  try{
    const isValidUser= await User.findOne({email})
    if(!isValidUser){
       return next(errorHandler(401,'Invalid email or pasword'))
    }
    const isValidPassword = bcryptjs.compareSync(password,isValidUser.password)
    if(!isValidPassword){
       return next(errorHandler(400,'Invalid  password'))
    }
    const token =jwt.sign({id:isValidUser._id},process.env.JWT_SECRET)
    const {password:pass, ...others}=isValidUser._doc;
    res.status(200)
    .cookie('access_token',token,{
       httpOnly:true,
    })
    .json(others)
}catch(error){
    next(error)
}
  }