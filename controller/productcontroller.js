import warehouse from '../model/warehouse.js'
import Product from '../model/product.js'


export const create_product = async(req,res) => {
    try{
        const {product_code,qty,volume,location_code} = req.body;
        console.log(product_code,qty,volume,location_code);
        const id = location_code;
        
        const obj =await warehouse.find(
            {location_code:id}
        );

        if(!obj){
            return res.status(500).json({success:"false",msg:"warehouse location is wrong"});
        }

        const obj2 = await Product.create({product_code,qty,volume,location_code});
        if(!obj2){
            return res.status(500).json({success:"false",msg:"server issue"});
        }
        res.status(201).json({
            "success": true,
            "message": "Location created successfully",
            "data":obj2
        })
    }
    catch(err){
        console.log("err in create_product");
    }
}