const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String,require:true,trim:true},
    age:{type:Number,require:true},
    email:{type:String,require:true,unique:true,trim:true},
    password:{type:String,require:true,minlength:8,trim:true},
    createdate:{type:Date,default:Date.now}
})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel