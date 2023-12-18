import {GET_POKEMONS, GET_POKEMON, GET_SEARCH_POKEMON} from "./actions";


const initialState = {
    pokemons: [],
    pokemon:[],
    searchPokemon: [],
};




const rootReducer=(state = initialState, action)=>{
    switch(action.type){
        case GET_POKEMONS:
            return{...state, pokemons: action.payload};
        case GET_POKEMON:
            return{...state, pokemon: action.payload};
        case GET_SEARCH_POKEMON:
            return {...state, searchPokemon: action.payload }
        default:
            return {...state};
    }
};

export default rootReducer;