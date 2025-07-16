import mongoose from "mongoose";

const productschema = mongoose.Schema({
    product_code:{
        type:String,
        required:true,
    },
    qty:{
        type:Number,
        required:true,
    },
    volume:{
        type:Number,
        required:true
    },
    location_code:{
        stores: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'warehouse' 
        } 
    }
},{
    timestamps:true
})


const Produdct = mongoose.model('Produdct',productschema);
export default Produdct;
