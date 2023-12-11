const Card = (props) => {
    return(
        <div>
            <p>Nombre:{props.nombre} </p>
            <p>Imagen:{props.imagen} </p>
            <p>Vida:{props.vida} </p>
            <p>Ataque:{props.ataque} </p>
            <p>Defensa:props{props.defensa} </p>
            <p>Velocidad:{props.velocidad} </p>
            <p>Altura:{props.altura} </p>
            <p>Peso:{props.peso} </p>
        </div>
    )
}

export default Card;

              