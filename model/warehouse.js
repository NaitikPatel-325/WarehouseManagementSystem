import mongoose from "mongoose";

const warehouseschema = mongoose.Schema({
    location_code:{
        type:String,
        unique:true,
        required:true
    },
    parent_location_code:{
        type:String,
        default:null
    },
},{
    timestamps:true
})

const warehouse = mongoose.model('warehouse',warehouseschema);
export default warehouse;