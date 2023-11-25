const userModel= require('../models/userModel')
const countLogincall = require('../middleware/countapiCall')

const createuser = async(req,resp,next)=>{
    
    try {
        if(!req.body.name || !req.body.email || !req.body.password ){
            return resp.status(400).json({result: "Failed", message: "Required field missing"})
        }else if (req.body.password.length < 8){
            return resp.status(400).json({result: "Failed", message: "Password cannot be less that 8 characters"})
        }
        countLogincall.emit("countCreateuserApiCall")
        const data = new userModel(req.body)
        const result = await data.save()
        resp.send(result)
        

        


    } catch (error) {
        if (error.code === 11000) {
            console.log("Email duplicate");
            return resp.status(400).send({ result: "Failed", message: "Email already exists" });
        }
        
    }
}

module.exports = createuser