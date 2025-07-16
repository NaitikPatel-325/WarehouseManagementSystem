import warehouse from '../model/warehouse.js'

export const create_location_routes = async (req,res) => {
    try{

        const{
            location_code,parent_location_code
        } = req.body;

        var type = "warehouse";
        console.log(location_code,parent_location_code);

        if(parent_location_code==null){
            type="storage"
        }

        const obj = await warehouse.create(
            {
                location_code,
                parent_location_code,
                type
            })

        if(!obj){
            return res.status(500).json({success:"false",msg:"server issue"});
        }

        res.status(201).json({
            "success": true,
            "message": "Location created successfully",
            "data":obj
        })

    }
    catch(err){
        console.error("in create location routes");
    }
}