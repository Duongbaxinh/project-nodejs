const mongoose = require('mongoose');
const connectDb = async()=>{
    try {
   await mongoose.connect('mongodb://localhost:27017/myapp')
   console.log('connect sucessed')
    } catch (error) {
        console.log(error)
    }
   
 }

module.exports = connectDb;