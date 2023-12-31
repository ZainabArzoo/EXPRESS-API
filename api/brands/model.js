const { Schema, model } = require('mongoose')

const BrandsSchema = new Schema({

    Brandname : {
        type : String,
        unique : true,
        required : true,
    },
    
    Brandimage : {
        type : String,
        required : true,
    },
    
}) 

const brand = model('brand', BrandsSchema)
module.exports = brand
