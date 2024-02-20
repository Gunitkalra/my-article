import User from '../models/user.models.js'
import bcryptjs from 'bcryptjs'
export const signup=async(req,res)=>{
const {username,email,password}= req.body
if (!username || !email|| !password||username===''||email===''||password===''){
    return res.status(400).json({message:'all feilds are required'})
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
