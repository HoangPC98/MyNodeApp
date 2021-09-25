// import  mongoose from "mongoose"
const mongoose = require("mongoose");
async function connect() {
   try {
        await mongoose.connect('mongodb://localhost:27017/tranning1db',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('connnect sucessfully OK nhes')
   } catch (error) {
       console.log('Connection Failed: ' + error)
   }
}

module.exports = {connect}