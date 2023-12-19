import style from "./Card.module.css"
import { Link } from "react-router-dom" 

const Card = (props) => {

  const onClose = (id) =>{
    console.log(`Cerrando elemento con ID: ${id}`)
  }
    
    return(
      <div className={style.card}>
           <button onClick={()=> onClose(props.id)}  className={style.btn}>X</button>
            <img src={props.imagen} alt="Nombre" />
            <p>Nombre:{props.nombre} </p>
            <p>Tipos:{props.tipos} </p>
          <Link to={`/detail/${props.id}`}>
          <button className={style.linkButton}>+ info</button>
          </Link>
          
        </div>
)
}
export default Card;



           


              