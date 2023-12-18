import style from "./Card.module.css"
import { Link } from "react-router-dom" 

const Card = (props) => {
    
    return(
        <div className={style.card}>
            <img src={props.imagen} alt="Nombre" />
            <p>Nombre:{props.nombre} </p>
            <p>Tipos:{props.tipos} </p>
          <Link to={`/detail/${props.id}`}>
          <button className={style.linkButton}>+ info</button>
          </Link>
          {/* onClose={props.onClose} */}
          
        </div>
)
}
export default Card;



           


              