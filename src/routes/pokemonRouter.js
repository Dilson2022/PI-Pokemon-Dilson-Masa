const {Router} = require("express");
const pokemonRouter = Router();

const pokemonControllers = require("../controllers/pokemonControllers");


// Rutas para traer todos los pokemones 
pokemonRouter.get("/",async (req,res) =>{
    const {name} = req.query;
    if(name) {
        try {
            const pokemon = await pokemonControllers.getOneByNombre(name);
            return res.status(200).json(pokemon);
        } catch (error) {
            return res.status(404).json({error: error.message})
        }
    }
    
    try {
        const pokemon = await pokemonControllers.getAll();
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});



//Ruta para buscar pokemones por nombre
pokemonRouter.get("/name",async (req,res) =>{
    const {name} = req.query;

    if(!name) return res.status(400).json({error: "Faltan datos"});
    try {
        const pokemon = await pokemonControllers.getOneByNombre(name);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});


//Ruta para buscar por id
pokemonRouter.get("/:id", async(req,res) =>{
    const {id} = req.params;
    try {
        const pokemon = await pokemonControllers.getOneById(id);
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

pokemonRouter.post("/",(req,res) =>{
    res.send(" un pokemon")
})

module.exports = pokemonRouter;