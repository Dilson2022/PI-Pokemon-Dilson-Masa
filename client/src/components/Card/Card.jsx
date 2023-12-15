import style from "./Card.module.css"
import { Link } from "react-router-dom" 

const Card = (props) => {
    return(
        <div className={style.card}>
            <p>Nombre:{props.nombre} </p>
            <p>Imagen:{props.imagen} </p>
            <p>Tipos:{props.tipos} </p>
          <Link>
          <button className={style.linkButton}>+ info</button>
          </Link>
        </div>
    )
}

export default Card;

              