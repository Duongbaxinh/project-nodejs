const mongosse = require('mongoose')

let Schema = mongosse.Schema

let store = new Schema({
    idCatalogy:{
        type:String,
    },
    foodName:{
        type:String,
    },
    avartar:{
        type:String,
    }
})
module.exports = mongosse.model("store",store)