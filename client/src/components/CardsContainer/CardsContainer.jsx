import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";


const CardsContainer = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const searchPokemon = useSelector((state) => state.searchPokemon);
  const filteredType = useSelector((state)=>state.filteredType);

  // Función para filtrar los pokémons según el tipo seleccionado
  const filterPokemonsByType = (pokemon) => {
    //console.log('Valor de pokemon.tipos:', pokemon.tipos);
    return (
      filteredType === "" || // Si no hay tipo filtrado, mostrar todos los pokémons
      (pokemon.tipos && pokemon.tipos.includes(filteredType)) // Verifica si pokemon.tipos está definido antes de usar includes
    );
  };

 

  return (
    <div className={style.CardsContainer}>
      {searchPokemon.length > 0
        ? searchPokemon.map((pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              nombre={pokemon.nombre}
              imagen={pokemon.img}
              tipos={pokemon.tipos}
              //vida={pokemon.vida}
              ataque={pokemon.ataque}
              defensa={pokemon.defensa}
              velocidad={pokemon.velocidad}
              altura={pokemon.altura}
              peso={pokemon.peso}
            />
          ))
        : pokemons

        .filter(filterPokemonsByType)
        .map((pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              nombre={pokemon.nombre}
              imagen={pokemon.img}
              tipos={pokemon.tipos}
              //vida={pokemon.vida}
              ataque={pokemon.ataque}
              defensa={pokemon.defensa}
              velocidad={pokemon.velocidad}
              altura={pokemon.altura}
              peso={pokemon.peso}
            />
          ))}
    </div>
  );
};

export default CardsContainer;
