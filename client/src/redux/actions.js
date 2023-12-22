import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON"
export const GET_SEARCH_POKEMON = "GET_SEARCH_POKEMON"
export const GET_ALL_TYPES = "GET_ALL_TYPES"
export const FILTER_POKEMONS = "FILTER_POKEMONS"

export const filterPokemons = (selectedType) => ({
  type: FILTER_POKEMONS,
  payload: selectedType
});

export const getAllTypes = () =>{
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/type")
    //console.log(apiData)
    const types = apiData.data;
    dispatch({
      type: GET_ALL_TYPES,
      payload: types
    })
  }
}

export const searchPokemon = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/pokemon?name=${name}`)
    const searchPokemon = [];
    searchPokemon.push(apiData.data)
    dispatch({
      type: GET_SEARCH_POKEMON,
      payload: searchPokemon
 })
  }
};


export const getPokemons = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/pokemon");
    //console.log(apiData)
    const pokemons = apiData.data;
    dispatch({
       type: GET_POKEMONS, 
       payload: pokemons });
  };
};


export const getPokemon = (id) =>{
  return async function (dispatch){
    const apiData = await axios.get(`http://localhost:3001/pokemon/${id}`);
    const pokemon = apiData.data;
    dispatch({
      type: GET_POKEMON, 
      payload: pokemon})
    };
  };
  
  
  
  
  
  // export const searchPokemon = (sear ch) => {
  //   return async function (dispatch)
  //     const apiData = await axios.get("");
  //     const searchPokemon = apiData.data;
  //     dispatch({
  //       type: GET_SEARCH_POKEMON,
  //       payload: searchPokemon})
  // };