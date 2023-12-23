// PokemonList.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordenarPokemones } from "../../redux/actions";
import style from "../PokemonList/PokemonList.module.css"

const PokemonList = () => {
    // Utiliza el hook useSelector para obtener el estado 'orden' del store de Redux
    const orden = useSelector((state) => state.orden);
  
    // Utiliza el hook useDispatch para obtener la función 'dispatch' del store de Redux
    const dispatch = useDispatch();
  
    // Define la función 'ordenarPor', que dispatch la acción 'ordenarPokemones' con los nuevos criterios
    const ordenarPor = (criterio) => {
      dispatch(
        ordenarPokemones(
          criterio,
          // Evalúa si el nuevo criterio es igual al criterio actual en el estado 'orden'
          criterio === orden.criterio ? !orden.ascendente : true
        )
      );
    };
  
    // Componente de React que muestra dos botones para ordenar la lista de Pokémon
    return (
      <div className={style.botones}>
        {/* Botón para ordenar por nombre */}
        <button onClick={() => ordenarPor("nombre")}>
          {/* Muestra "A-Z" si el criterio es "nombre" y la dirección es ascendente, de lo contrario, muestra "Z-A" */}
          {orden.criterio === "nombre" && orden.ascendente ? "A-Z" : "Z-A"}
        </button>
  
        {/* Botón para ordenar por ataque */}
        <button onClick={() => ordenarPor("ataque")}>
          {/* Muestra "↑ Ataque" si el criterio es "ataque" y la dirección es ascendente, de lo contrario, muestra "↓ Ataque" */}
          {orden.criterio === "ataque" && orden.ascendente ? "↑ Ataque" : "↓ Ataque"}
        </button>
      </div>
    );
  };
  

export default PokemonList;
