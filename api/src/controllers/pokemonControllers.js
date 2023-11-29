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

  const apiPokemon = (await axios.get("https://pokeapi.co/api/v2/pokemon/")).data.results;

  const results = [];

  for (const pokemon of apiPokemon) {
    const url = pokemon.url;

    // Realiza una llamada a la API a la URL del Pokémon
    const response = await axios.get(url);
    const infoFromApi = response.data;

    // Extrae los atributos deseados
    const extraerData = {
      id: infoFromApi.id,
      nombre: infoFromApi.name,
      tipos: infoFromApi.types.map((t) => t.type.name),
      img: infoFromApi.sprites.other['official-artwork'].front_default,
      
      ataque: infoFromApi.stats[1].base_stat,
      defensa: infoFromApi.stats[2].base_stat,
      velocidad: infoFromApi.stats[5].base_stat,
      peso: infoFromApi.weight,
      altura: infoFromApi.height,
    };

    results.push(extraerData);
  }

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