const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    zone: {
        type: String,
        enum: ["south","north","central"],
        requires: true,
    
    },
    organization_id:{
        type:Number,
        require:true,
    },
    base_distance:{
        type:Number,
        require:true,
    },
    km_price:{
        type:Number,
        require:true,
    },
    fixed_price:{
        type:Number,
        require:true,
    },
    item_id:{
        type: Number,
        require:true,
        
    }



});
//create price model
const price = mongoose.model('price', priceSchema);
module.exports =price;