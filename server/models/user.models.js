import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default: 'https://www.google.com/https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Davatar&psig=AOvVaw1Jeb1FK892v0BimW5ZQAcE&ust=1709730021643000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCgjuiW3YQDFQAAAAAdAAAAABAE'
    },
},
    {
        timestamps:true,
    }
)
const User=mongoose.model('user',userSchema);
export default User;  