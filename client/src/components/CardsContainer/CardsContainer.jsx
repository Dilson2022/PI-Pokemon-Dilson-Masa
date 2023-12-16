import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux"

const CardsContainer = () => {
   
	const pokemons = useSelector(state=>state.pokemons);
    //console.log(pokemons)
	
    return(
        <div className={style.CardsContainer}>
            {pokemons.map(pokemon=>{
                return <Card
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
            })}
        </div>
    )
}

export default CardsContainer;