import React, { useState, useEffect } from "react";
import style from "./CardsContainer.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const searchPokemon = useSelector((state) => state.searchPokemon);
  const filteredType = useSelector((state) => state.filteredType);
  const orden = useSelector((state) => state.orden);
  const currentPage = useSelector((state) => state.currentPage);
  const pokemonsPerPage = 12; // Número de pokemons por página

  const [orderedPokemons, setOrderedPokemons] = useState([]);
  

  const filterPokemonsByType = (pokemon) => {
    return (
      filteredType === "" ||
      (pokemon.tipos && pokemon.tipos.includes(filteredType))
    );
  };

  useEffect(() => {
    
    const pokemonsFilteredByType = pokemons.filter(filterPokemonsByType);

    const pokemonsOrdered = [...pokemonsFilteredByType].sort((a, b) => {
      const factorOrden = orden.ascendente ? 1 : -1;
      if (orden.criterio === "nombre") {
        return factorOrden * a.nombre.localeCompare(b.nombre);
      } else if (orden.criterio === "ataque") {
        return factorOrden * (a.ataque - b.ataque);
      }
      return 0;
    });

    setOrderedPokemons(pokemonsOrdered);
  }, [pokemons, filteredType, orden ]);

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = orderedPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);


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
              ataque={pokemon.ataque}
              defensa={pokemon.defensa}
              velocidad={pokemon.velocidad}
              altura={pokemon.altura}
              peso={pokemon.peso}
            />
          ))
        : currentPokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              nombre={pokemon.nombre}
              imagen={pokemon.img}
              tipos={pokemon.tipos}
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
