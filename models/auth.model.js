const mongoose=require('mongoose')

const {Schema,model}=mongoose

const userSchema=new Schema({
    full_name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:8,
        maxlength:40
    },
    password:{
        type:String,
        required:true,
        minlength:4,
        maxlength:15
    },
    date:{
        type:Date,
        default:Date.now
    }
})

userSchema.methods.generateAuthToken=function (){
    
}

const User=model('User',userSchema)

module.exports=User