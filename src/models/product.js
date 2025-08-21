const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    description:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    active:{
        type:Boolean,
        default:true
    }

});

module.exports = mongoose.model(`Product`, productSchema);