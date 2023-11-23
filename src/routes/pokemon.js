const {Router} = require("expresss");

const pokemonRouter = Router();

pokemonRouter.get("/",(req,res) =>{
    res.send("Estoy en pokemones")
})

module.exports = pokemonRouter;