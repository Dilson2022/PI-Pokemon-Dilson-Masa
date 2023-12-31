const {
  createPokemon,
  getPokemonId,
  searchPokemonName,
  getAllPokemon,
} = require("../controllers/pokemonControllers.js");

const getAllPokemonHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name ? await searchPokemonName(name) : await getAllPokemon();
    res.status(200).json(results);
    
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

 

const getAllPokemonHandlerId = async (req, res) => {
  const { id } = req.params;
  
  try {
    const pokemon = await getPokemonId(id);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//La función getAllPokemonPost crea un nuevo objeto Pokemon en la memoria. Este objeto se usa para enviar una respuesta JSON al cliente.
//La función createPokemon crea un nuevo objeto Pokemon en la base de datos. Este objeto se usa para almacenar los datos del Pokemon.

const getAllPokemonPost = async (req, res) => {
  try {
    const {id, imagen, nombre, tipo, ataque, defensa, velocidad, altura, peso, } = req.body;
    const newPokemon = await createPokemon(id,imagen, nombre, tipo, ataque, defensa,  velocidad, altura, peso);
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllPokemonHandler,
  getAllPokemonHandlerId,
  getAllPokemonPost,
};
