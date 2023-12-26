import { useState } from "react";
import { useDispatch } from "react-redux";
import {filterPokemons} from "../../redux/actions"
import style from "../Filter/Filter.module.css"

const FilterPokemons = () => {
    const [type, setType] = useState("")
    const [origin, setOrigin]= useState("")
    const dispatch = useDispatch();
      
      const handlerFilterPokemon = (event) => {
        const { name, value } = event.target;
        if (name === "type" ) {
          setType(value);
        } else if (name === "origin") {
          setOrigin(value);
        }
        //console.log("Origin:", value);
        dispatch(filterPokemons(type, origin));
       
      }

      return (
        <div className={style.filter}>
           <label htmlFor="filterPokemons">Tipo:</label> 
          <select 
           id="filterPokemon"
           name="type"
           value={type}
           onChange={handlerFilterPokemon}
           >
        <option value="">Todos</option>
        <option value="grass">Hierba</option>
        <option value="fire">Fuego</option>
        <option value="water">Agua</option>
        <option value="bug">Bicho</option>
        <option value="normal">Normal</option>
           </select>

           <label htmlFor="filterOrigin">Origen</label>
           <select 
           id="filterOrigin"
           name="origin"
           value={origin}
           onChange={handlerFilterPokemon} 
           >
            <option value="">Todos</option>
           <option value="API">API</option>
           <option value="creados">Creados</option>
           </select>
        </div>
         );
        }      
        
        export default FilterPokemons;
        
        
        