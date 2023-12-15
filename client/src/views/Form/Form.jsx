import {  useState } from "react";
import style from "./Form.module.css"

const Form = () => {

    const [form, setForm] = useState({
        nombre:"",
        ataque:"",
        defensa:"",
        velocidad:"",
        peso:"",
        altura:"",
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({...form, [property]:value})
    }

    return(
        <form>
           <div className={style.form}>
            <label>Nombre:</label>
            <input type="text" value={form.nombre} onChange={changeHandler} name="nombre"/>
            </div> 

            <div>
            <label>Ataque:</label>
            <input type="text"  value={form.ataque}  onChange={changeHandler} name="nombre"/>
            </div> 

            <div>
            <label>Defensa:</label>
            <input type="text"  value={form.defensa} onChange={changeHandler} name="defensa"/>
            </div> 

            <div>
            <label>Velocidad:</label>
            <input type="text"  value={form.velocidad}  onChange={changeHandler} name="velocidad"/>
            </div> 

            <div>
            <label>Peso:</label>
            <input type="text"  value={form.peso} onChange={changeHandler} name="peso"/>
            </div> 

            <div>
            <label>Altura:</label>
            <input type="text"  value={form.altura}  onChange={changeHandler} name="altura"/>
            </div> 
            
        </form>
    )
}
export default Form;