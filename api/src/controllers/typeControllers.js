const axios = require("axios");
const {Types} = require("../db");




const getTypes = async()=>{
    const typesdb = await Types.findAll()
    if(typesdb.length){
        return typesdb
    } else{
        const types = (await axios.get(URL_API_TYPES)).data.results.map((t)=>({
            id: t.id,
            nome: t.name
        }))
        await Types.bulkCreate(types)
        return await Types.findAll()
    }
}
        
module.exports ={
    getTypes
}



    
      
  
      
      
  
  

   


