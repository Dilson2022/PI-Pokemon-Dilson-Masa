const axios = require("axios");
const {Sequelize} = require("sequelize");

const{Pokemon, Types} = require("../db")

const getALL = async () => {
    const pokemonDB = await getAllDB();
    const pokemonAPI = await getAllAPI();

    return[...pokemonDB, ...pokemonAPI];
    
}