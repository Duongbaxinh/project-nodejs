const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    userName:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    passWord:{
        type:String
    }
})

module.exports = mongoose.model('user',user)