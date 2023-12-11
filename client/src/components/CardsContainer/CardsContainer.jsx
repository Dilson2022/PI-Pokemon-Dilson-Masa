import Card from "../Card/Card";



const CardsContainer = () => {
    const pokemons = [
        {
		"id": 1,
		"nombre": "bulbasaur",
		"tipos": [
			"grass",
			"poison"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		"ataque": 49,
		"defensa": 49,
		"velocidad": 45,
		"peso": 69,
		"altura": 7
	},
	{
		"id": 2,
		"nombre": "ivysaur",
		"tipos": [
			"grass",
			"poison"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
		"ataque": 62,
		"defensa": 63,
		"velocidad": 60,
		"peso": 130,
		"altura": 10
	},
	{
		"id": 3,
		"nombre": "venusaur",
		"tipos": [
			"grass",
			"poison"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
		"ataque": 82,
		"defensa": 83,
		"velocidad": 80,
		"peso": 1000,
		"altura": 20
	},
	{
		"id": 4,
		"nombre": "charmander",
		"tipos": [
			"fire"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
		"ataque": 52,
		"defensa": 43,
		"velocidad": 65,
		"peso": 85,
		"altura": 6
	},
	{
		"id": 5,
		"nombre": "charmeleon",
		"tipos": [
			"fire"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
		"ataque": 64,
		"defensa": 58,
		"velocidad": 80,
		"peso": 190,
		"altura": 11
	},]

    return(
        <div>
            {pokemons.map(pokemon=>{
                return <Card

                id={pokemon.id}
                nombre={pokemon.nombre}
                imagen={pokemon.imagen}
                vida={pokemon.vida}
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