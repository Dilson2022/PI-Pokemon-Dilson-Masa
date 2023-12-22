import CardsContainer from "../../components/CardsContainer/CardsContainer"
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getPokemons} from "../../redux/actions"
import SearchBar from "../../components/SearchBar/SearchBar"
import Types from "../../components/Types/Types"
//import {getAllTypes} from "../../redux/actions"
import FilterPokemons from "../../components/Filter/FilterPokemon";


const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemons());
    },[dispatch])
    

    return(
        <div>
           < FilterPokemons/>
            <Types/>
             <SearchBar/> 
            <CardsContainer />
           
        </div>
    )
}

export default Home;