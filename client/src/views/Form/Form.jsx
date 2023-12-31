import {  useState } from "react";
import style from "./Form.module.css"
import axios from "axios";

const Form = () => {

    const [form, setForm] = useState({
         tipo:"",
        nombre:"",
        ataque:"",
        defensa:"",
        velocidad:"",
        peso:"",
        altura:""
    })
    // const [errors, setErrors] = useState({
    //     nombre:"",
    //     ataque:"",
    //     defensa:"",
    //     velocidad:"",
    //     peso:"",
    //     altura:""
    // })
    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

         setForm({...form, [property]:value})
    //     validate(form)
    }

    
    // const validate = (form) => {
    //    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)){
    //      console.log("Todo bien");
    //    }else{
    //     console.log("Hay errores");
    //    }
    // }


    const submitHandler = (event) => {
        event.preventDefault()
         axios.post("http://localhost:3001/pokemon",form)
         //console.log(form)
         .then((res) => {
          console.log(res); // Registrar la respuesta del servidor
          alert("Pokemon creado exitosamente");
        })
        .catch(err=>alert("Error al crear pokemon"));
        }


        return (
            <form onSubmit={submitHandler}>
              <div className={style.form}>
                <label>Nombre:</label>
                <input type="text" value={form.nombre} onChange={changeHandler} name="nombre" />
              </div>
        
              <div>
                <label>Ataque:</label>
                <input type="range" min="0" max="100" value={form.ataque} onChange={changeHandler} name="ataque" />
                <span>{form.ataque}</span>
              </div>
        
              <div>
                <label>Defensa:</label>
                <input type="range" min="0" max="100" value={form.defensa} onChange={changeHandler} name="defensa" />
                <span>{form.defensa}</span>
              </div>
        
              <div>
                <label>Velocidad:</label>
                <input type="range" min="0" max="100" value={form.velocidad} onChange={changeHandler} name="velocidad" />
                <span>{form.velocidad}</span>
              </div>
        
              <div>
                <label>Peso:</label>
                <input type="range" min="0" max="100" value={form.peso} onChange={changeHandler} name="peso" />
                <span>{form.peso}</span>
              </div>
        
              <div>
                <label>Altura:</label>
                <input type="range" min="0" max="100" value={form.altura} onChange={changeHandler} name="altura" />
                <span>{form.altura}</span>
              </div>

              <div>
                <label>Tipo:</label>
                <select name="tipo" onChange={changeHandler}>
                <option value="grass">Hierba</option>
                <option value="fire">Fuego</option>
                <option value="water">Agua</option>
                <option value="bug">Bicho</option>
                <option value="normal">Normal</option>
               </select>
                <span>{form.tipo}</span>

              </div>
 
        
              <button type="submit">Crear Pokemon</button>
            </form>
          );
        };
        
        export default Form;