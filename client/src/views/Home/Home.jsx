import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import Types from "../../components/Types/Types";
//import {getAllTypes} from "../../redux/actions"
import FilterPokemons from "../../components/Filter/FilterPokemon";
import PokemonList from "../../components/PokemonList/PokemonList";
import Pagination from "../../components/Pagination/Pagination";
//import VolverButton from "../../components/BotonVolver/BotonVolver";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div>
      
      <Pagination />
      <PokemonList />
      <FilterPokemons />
      <Types />
      <SearchBar />
      <CardsContainer />
    </div>
  );
};

export default Home;
