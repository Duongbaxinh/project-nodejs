const mongoose = require('mongoose');
const { array } = require('../middlewear/upload');

const Schema = mongoose.Schema;

const catalogy = new Schema({
    avarta:{
        type:String
    },
    
Interactive:{
    like:{
        type:Number
    },
    unlike:{
        type:Number
    },
    comment:{
        quatity:{
            type:Number
        },
        content:{
            type:String
        }
    }
},
information:{
    foodName:{
        type:String
    },
    origin:{
        type:String
    }
},
ingredient:{
    nameIngredient:{
       type:Array
    },
    mass:{
        type:Array
    },
    list:{
            type:Array
        }
}
})
module.exports = mongoose.model('catalogy',catalogy);