import CardsContainer from "../../components/CardsContainer/CardsContainer"
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getPokemons} from "../../redux/actions"
import SearchBar from "../../components/SearchBar/SearchBar"
import Types from "../../components/Types/Types"
//import {getAllTypes} from "../../redux/actions"
import FilterPokemons from "../../components/Filter/FilterPokemon";
import PokemonList from "../../components/PokemonList/PokemonList"
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
    const dispatch = useDispatch();
    // const [showAllPokemons, setShowAllPokemons] = useState(false);

    useEffect(()=>{
        dispatch(getPokemons());
    },[dispatch])
    
    // const handleShowAllPokemons = () => {
    //     setShowAllPokemons(true);
    //     dispatch(setPagination(0)); // Página 0 indicará que se deben mostrar todos los pokemones
    //   };

    return(
        <div>
             {/* <button onClick={handleShowAllPokemons}>
        Mostrar Todos los Pokemones
      </button> */}
            <Pagination/>
            <PokemonList/>
           < FilterPokemons/>
            <Types/>
             <SearchBar/> 
            <CardsContainer />
           
        </div>
    )
}

export default Home;