const userModel = require('../models/userModel')
const countLogincall = require('../middleware/countapiCall')
var jwt = require('jsonwebtoken');
require("dotenv").config();

const userLogin= async (req,resp,next)=>{

    countLogincall.emit("countLogincall")
    try {
        if(!req.body.email || !req.body.password){
            return resp.status(400).json({result:"Failed",message:"Email & Password is missing"})
        }

        const data = await userModel.findOne({email:req.body.email,password:req.body.password})
        console.log(data);
        if(data === undefined || data === null){
            resp.status(200).json({result:"User does not exists "})
        }else
        if(data.email === req.body.email  && data.password === req.body.password){
            jwt.sign({data},process.env.SECRETKEY,{expiresIn:'8h'} ,(err,token)=>{
                if(err){
                    console.log(err.message)
                }else(
                    resp.status(200).json({result:"Sucess",message:"Login sucess",token:token})
                )

            })

           
         //   resp.status(200).json({result:"Sucess",message:"User exists"})

        }else{
            resp.status(400).json({data:"user not found"})
        }
       
    } catch (error) {
        resp.status(400).json(error.message)
    }
    
    
    

}

module.exports = userLogin