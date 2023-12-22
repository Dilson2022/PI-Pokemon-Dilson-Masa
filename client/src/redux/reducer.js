import {GET_POKEMONS, GET_POKEMON, GET_SEARCH_POKEMON, GET_ALL_TYPES, FILTER_POKEMONS} from "./actions";


const initialState = {
    pokemons: [],
    pokemon:[],
    searchPokemon: [],
    getAllTypes:[],
    filteredType: ""
};




const rootReducer=(state = initialState, action)=>{
    switch(action.type){
        case GET_POKEMONS:
            return{...state, pokemons: action.payload};
        case GET_POKEMON:
            return{...state, pokemon: action.payload};
        case GET_SEARCH_POKEMON:
            return {...state, searchPokemon: action.payload }
            case  GET_ALL_TYPES:
                return {...state, getAllTypes: action.payload}
            case FILTER_POKEMONS:
                return {...state, filteredType: action.payload,}
        default:
            return {...state};
    }
};

export default rootReducer;