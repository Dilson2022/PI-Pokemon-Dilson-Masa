const {Router} = require("express");
const pokemonRouter = Router();

const {
    getAllPokemonHandler,
    getAllPokemonHandlerId,
    getAllPokemonPost
} = require("../handlers/pokemonHandler");

pokemonRouter.get("/",  getAllPokemonHandler)
pokemonRouter.get("/:id",  getAllPokemonHandlerId)
pokemonRouter.post("/", getAllPokemonPost)

module.exports = pokemonRouter;



