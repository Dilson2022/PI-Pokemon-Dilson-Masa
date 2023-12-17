import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import{getPokemon} from "../../redux/actions";

const Detail = () => {
  const{id} = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon);
  //console.log(pokemon);

  useEffect(() => {
    dispatch(getPokemon(id));
  },[dispatch, id]);

  if(!pokemon) {
    return <div>pokemon no encontrado</div>
  }

   
  return(
    <div>
      <p>ID: {id} </p>
      <p>Nombre: {pokemon.name}</p>
      <img src={pokemon.img} alt="pokemon" />
      <p>Ataque: {pokemon.attack}</p>
      <p>Defensa: {pokemon.defense}</p>
      <p>Velocidad: {pokemon.speed}</p>
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      <p>Tipo: {pokemon.types && [...pokemon.types].map((type) => type.name).join(", ")}</p>
  
    </div>
  )
}
export default Detail;
