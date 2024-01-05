const { Pokemon } = require("../db");
const axios = require("axios");

const searchPokemonName = async (name) => {
  //console.log('Buscando Pokémon:', name);
  const databasePokemon = await Pokemon.findAll({ where: { nombre: name } });

  if (databasePokemon.length === 0) {
    // Si no existe en la base de datos, busca en la API
    const apiPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const result = await axios.get(apiPokemonUrl);
    const apiPokemon = result.data;

    // Extrae los atributos deseados
    const extraerData = {
      id: apiPokemon.id,
      nombre: apiPokemon.name,
      tipos: apiPokemon.types.map((t) => t.type.name),
      imagen: apiPokemon.sprites.other["official-artwork"].front_default,
      ataque: apiPokemon.stats[1].base_stat,
      defensa: apiPokemon.stats[2].base_stat,
      velocidad: apiPokemon.stats[5].base_stat,
      peso: apiPokemon.weight,
      altura: apiPokemon.height,
    };

    return extraerData;
  } else {
    // Si existe en la base de datos, devuélvelo
    return databasePokemon;
  }
};

const getAllPokemon = async () => {
  const databasePokemon = await Pokemon.findAll();
  //console.log(databasePokemon)

  const apiPokemon = (
    await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
  ).data.results;

  const results = [];
  for (const pokemon of databasePokemon) {
    results.push({ ...pokemon.dataValues, origin: "creados" });
  }

  for (const pokemon of apiPokemon) {
    const url = pokemon.url; // Extraigo la url del pokemon actual de la lista

    // Realiza una llamada a la API a la URL del Pokémon
    const response = await axios.get(url);

    const infoFromApi = response.data;
    // Extrae los atributos deseados
    const extraerData = {
      id: infoFromApi.id,
      nombre: infoFromApi.name,
      tipos: infoFromApi.types.map((t) => t.type.name),
      imagen: infoFromApi.sprites.other["official-artwork"].front_default,
      ataque: infoFromApi.stats[1].base_stat,
      defensa: infoFromApi.stats[2].base_stat,
      velocidad: infoFromApi.stats[5].base_stat,
      peso: infoFromApi.weight,
      altura: infoFromApi.height,
    };
    results.push({ ...extraerData, origin: "API" });
  }
  return results;
};

const getPokemonId = async (id) => {
  if (isNaN(id)) {
    const pokemon = await Pokemon.findOne({ where: { id } });

    return {
      id: pokemon.id,
      name: pokemon.nombre,
      img: pokemon.imagen,
      attack: pokemon.ataque,
      defense: pokemon.defensa,
      speed: pokemon.velocidad,
      height: pokemon.altura,
      weight: pokemon.peso,
      types: [
        {
          name: pokemon.tipo,
        },
      ],
     
    };
  }

  const res = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
  return {
    id: res.id,
    name: res.name,
    img: res.sprites.other.dream_world.front_default,
    attack: res.stats[1].base_stat,
    defense: res.stats[2].base_stat,
    speed: res.stats[5].base_stat,
    height: res.height,
    weight: res.weight,
    types: res.types.map((t) => {
      return {
        name: t.type.name,
      };
    }),
  };
};


const createPokemon = async (
  id,
  imagen,
  nombre,
  tipo,
  ataque,
  defensa,
  velocidad,
  altura,
  peso
) =>
  await Pokemon.create({
    id,
    imagen,
    nombre,
    tipo,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
  });

module.exports = {
  createPokemon,
  getPokemonId,
  searchPokemonName,
  getAllPokemon,
};
