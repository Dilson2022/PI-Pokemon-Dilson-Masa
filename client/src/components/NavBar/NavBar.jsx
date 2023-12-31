import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () => {
    return(
        <div className={style.Container}>
           <Link to="/home">INICIO</Link>
           <Link to="/create">CREAR POKEMON</Link>
        </div>
    )
}

export default NavBar;