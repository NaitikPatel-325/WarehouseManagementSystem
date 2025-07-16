import warehouse from '../model/warehouse.js'

export const create_location_routes = async (req,res) => {
    try{

        const{
            location_code,parent_location_code
        } = req.body;

        var type = "storage";
        console.log(location_code,parent_location_code);

        if(parent_location_code==null){
            type="warehouse"
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

// void collect_child(int id,unorder)

function dfs(id,ptoc,ans){
    ans.push[id];
}

export const getwarehouseintree = async(req,res)=>{
    try{
        console.log("in getwarehouse");
        console.log(req.query.warehouse_code);   
        
        const id = req.query.warehouse_code;
        
        const obj =await warehouse.find(
            {location_code:id}
        );
        const a =await warehouse.find();
        ///logic for tree making    
        console.log(a);
        
        const ptoc = {};
        a.foreach(loc=>{
            const parentid=loc.parent_location_code?loc.parent_location_code:null;
            const cid = loc.location_code;
            if(!ptoc[parentid]){
                ptoc[parentid]=[];
            }
            ptoc[parentid].push(cid);
        })



        res.status(201).json({
            "success": true,
            "message": "warehouse tree",
            "data":obj
        })


    }
    catch{
        console.error("in get warehouse location routes erroe");
    }
}