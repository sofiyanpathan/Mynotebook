const mongoose=require('mongoose')
const { Schema } = mongoose;


const userSchema=new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true
        ,required:true
    },
    date:{
        type:Date,
       default:Date.now
    }
})

const User=mongoose.model('user',userSchema)
module.exports=User