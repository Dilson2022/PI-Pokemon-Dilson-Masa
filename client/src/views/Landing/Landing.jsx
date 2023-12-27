import style from "./Landing.module.css"

const Landing = () => {
    return(
        <div className={style.landingContainer}>
            <h1>Proyecto Pokemon</h1>
            <a href="/home"className={style.ingresarBtn} >Ingresar</a>
        </div>
    )
}

export default Landing;