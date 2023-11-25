const Eventemitter = require('events');
const mongoose = require('mongoose');
const countModel = require('../models/apicalls');

const event = new Eventemitter();


event.on("countCreateuserApiCall", async () => {
    
    try {
        const findData = await countModel.findById({_id:"655ae09895724ea2343f99b3"})
        const update = findData.totalcreateusercall + 1
        const updatedata = await countModel.findByIdAndUpdate("655ae09895724ea2343f99b3",{totalcreateusercall:update})
        console.log(update);
    } catch (error) {
        console.error("Error querying the database:", error);
    }
});

event.on("countLogincall", async () => {
    
    try {
        const findData = await countModel.findById({_id:"655ae09895724ea2343f99b3"})
        const update = findData.totallogincall + 1
        const updatedata = await countModel.findByIdAndUpdate("655ae09895724ea2343f99b3",{totallogincall:update})
        console.log(update);
    } catch (error) {
        console.error("Error querying the database:", error);
    }
});

module.exports = event;
