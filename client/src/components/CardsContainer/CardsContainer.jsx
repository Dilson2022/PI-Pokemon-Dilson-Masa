import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux"

const CardsContainer = () => {
   
	const pokemons = useSelector(state=>state.pokemons);
    const searchPokemon = useSelector(state=>state.searchPokemon)
    

    //console.log(pokemons)
    // const onClose = () =>{
        //     console.log("Cerrar algo")
        
        // } 
        return(
            <div className={style.CardsContainer}>
                
    {searchPokemon.length > 0 ? (

    searchPokemon.map((pokemon) => (
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
     ) : (
         pokemons.map((pokemon) => (
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
      )}
    
    
    
    
                
            </div>
        )
    }
    
    export default CardsContainer;
        
        
