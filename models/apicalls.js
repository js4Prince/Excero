const mongoose = require('mongoose')

const counterDetails = new mongoose.Schema({
    totallogincall:{type:Number},
    totalcreateusercall:{type:Number}
})

const countModel = mongoose.model('apicounts',counterDetails)

module.exports = countModel