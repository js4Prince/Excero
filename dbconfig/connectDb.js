const mongoose = require('mongoose')

const dbConnection = async (dbUrl)=>{
    try{
       await mongoose.connect(dbUrl)
        console.log("==> Db Connected");


    }catch(error){
        console.warn("==> Db Connection failed"+error.message);

    }
   

}

module.exports = dbConnection