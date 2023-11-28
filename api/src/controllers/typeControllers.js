const axios = require("axios");
const {Types} = require("../db");


const getTypes = async()=>{
    const typesdb = await Types.findAll()
    if(typesdb){
        return typesdb
    } else{
        const response = (await axios.get("https://pokeapi.co/api/v2/type"))
        //console.log(response.data);
        const types = response.data.results.map((t)=>{return {nombre:t.nombre}})
    await Types.bulkCreate(types)
    return await Types.findAll()
    }


}

module.exports ={
    getTypes
};
   


