var jwt = require('jsonwebtoken');

const verifyToken = (req,resp,next)=>{
 var tokenheader = req.headers['authorization']
if( tokenheader != undefined){
    var bearerToken = tokenheader.split(" ")
    jwt.verify(bearerToken[1],process.env.SECRETKEY,(err,decodeddata)=>{
        if(err){
            resp.status(400).json({result:"Failed",message:'Authrization failed '})
        }else{
            console.log('==> token username'+ decodeddata.data.email);
            next()
        }
    })

}else{
    resp.status(400).json({result:"Failed",message:'Authrization failed token not found'})
}

}

module.exports = verifyToken

