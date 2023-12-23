import { useState } from "react";
import { useDispatch } from "react-redux";
import {filterPokemons} from "../../redux/actions"
import style from "../Filter/Filter.module.css"

const FilterPokemons = () => {
    const [state, setState] = useState("")
    const dispatch = useDispatch();
      
      const handlerFilterPokemon = (event) => {
        const selectedValue = event.target.value;
        setState(selectedValue);
        dispatch(filterPokemons(selectedValue));
      }

      return (
        <div className={style.filter}>
          {/* <label htmlFor="filterPokemons">Selecciona un tipo</label> */}
          <select 
           id="filterPokemon"
           value={state}
           onChange={handlerFilterPokemon}
           >
           <option value="">Todos</option>
           <option value="grass">Hierba</option>
           <option value="fire">Fuego</option>
           <option value="water">Agua</option>
           <option value="bug">Bicho</option>
           <option value="normal">Normal</option>
           </select>
        </div>
         );
        }      
        
        export default FilterPokemons;
        
        
        