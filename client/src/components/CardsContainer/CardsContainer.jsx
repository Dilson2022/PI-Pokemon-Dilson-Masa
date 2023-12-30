import React, { useState, useEffect } from "react";
import style from "./CardsContainer.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const searchPokemon = useSelector((state) => state.searchPokemon);
  const type = useSelector((state) => state.type);
  const origin = useSelector((state) => state.origin);
  const orden = useSelector((state) => state.orden);
  const paginaActual = useSelector((state) => state.currentPage);
  const pokemonsPorPagina = 12; // Número de pokemons por página

  const [orderedPokemons, setOrderedPokemons] = useState([]);

  const filterPokemonsByTypeAndOrigin = (pokemon) => {
    const typeCondition = !type || (pokemon.tipos && pokemon.tipos.includes(type));
    const originCondition = !origin || pokemon.origin === origin;
  
    const isAPIMode = origin === "API";
    const isCreatedMode = origin === "creados";
  
    if (isAPIMode && pokemon.origin !== "API") {
      return false;
    }
  
    if (isCreatedMode && pokemon.origin !== "creados") {
      return false;
    }
  
    return typeCondition && originCondition;
  };

  useEffect(() => {
    const pokemonsFilteredByTypeAndOrigin = pokemons.filter(
      filterPokemonsByTypeAndOrigin
    );

    const pokemonsOrdered = [...pokemonsFilteredByTypeAndOrigin].sort((a, b) => {
      const factorOrden = orden.ascendente ? 1 : -1;
      if (orden.criterio === "nombre") {
        const aNombre = a.nombre ?? "";
        const bNombre = b.nombre ?? "";
        return factorOrden * aNombre.localeCompare(bNombre);
      } else if (orden.criterio === "ataque") {
        return factorOrden * (a.ataque - b.ataque);
      }
      return 0;
    });

    setOrderedPokemons(pokemonsOrdered);
  }, [pokemons, type, origin, orden]);

  const mostrarTodos = paginaActual === -1;
  const comenzar = mostrarTodos ? 0 : (paginaActual - 1) * pokemonsPorPagina;
  const final = mostrarTodos ? orderedPokemons.length : comenzar + pokemonsPorPagina;
  const currentPokemons = orderedPokemons.slice(
    comenzar,
    final
  );

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