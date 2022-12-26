const mongoose =require('mongoose')
const loginSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
    ,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const model=mongoose.model('USERS',loginSchema);
module.exports=model;