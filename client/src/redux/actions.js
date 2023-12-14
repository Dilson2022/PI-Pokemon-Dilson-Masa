import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";

export const getPokemons = () => {
  return async function (dispatch) {
    const apiData = await axios.get("https://localhost:3001/pokemon");
    console.log(apiData)
    const pokemons = apiData.data;
    dispatch({ type: GET_POKEMONS, payload: pokemons });
  };
};

export const getPokemon = (id) =>{
  return async function (dispatch){
    const apiData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = apiData.data;
    dispatch({type: "GET_POKEMON", payload: pokemon})
  };
};