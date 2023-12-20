import CardsContainer from "../../components/CardsContainer/CardsContainer"
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getPokemons} from "../../redux/actions"
import SearchBar from "../../components/SearchBar/SearchBar"
import Types from "../../components/Types/Types"
import {getAllTypes} from "../../redux/actions"


const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemons());
        dispatch(getAllTypes());
    },[dispatch])

    return(
        <div>
            
            <Types/>
             <SearchBar/> 
            <CardsContainer />
           
        </div>
    )
}

export default Home;