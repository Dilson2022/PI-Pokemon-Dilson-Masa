const{Pokemon} = require("../db")
const axios = require("axios");

const searchPokemonName = () => {

};

const getAllPokemon = async () => {
    const databasePokemon = await Pokemon.findAll();

    const apiPokemon = (await axios.get("https://pokeapi.co/api/v2/pokemon/")).data.results;
    //console.log(apiPokemon)
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