const{Pokemon} = require("../db")
const axios = require("axios");

const searchPokemonName = async (nombre) => {
    const databasePokemon = await Pokemon.findAll({where: {nombre: nombre}});

    if (databasePokemon.length === 0) { 
    const apiPokemon = (await axios.get("https://pokeapi.co/api/v2/pokemon/"))
    .data.results; 
    //console.log(apiPokemon)
    const filteredApi = apiPokemon.filter((pokemon) => pokemon.nombre === nombre);

    return filteredApi;
         } else { 
            return databasePokemon;
         }
};
    
      

const getAllPokemon = async () => {
    const databasePokemon = await Pokemon.findAll();
  
    const apiPokemon = (await axios.get("https://pokeapi.co/api/v2/pokemon/"))
      .data.results;
  
    const results = [...databasePokemon, ...apiPokemon];
  
    return results;
  };
  
  
  

const getPokemonId = async (id, source) => {
    const pokemon = 
    source === "api" 
    ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
        .data
    : await Pokemon.findByPk(id);
    return pokemon;
};

const createPokemon = async (id, nombre, imagen, vida, ataque, defensa, velocidad, altura, peso) =>
 await Pokemon.create({id, nombre, imagen, vida, ataque, defensa, velocidad, altura, peso});


module.exports = {
    createPokemon,
    getPokemonId,
    searchPokemonName,
    getAllPokemon
};