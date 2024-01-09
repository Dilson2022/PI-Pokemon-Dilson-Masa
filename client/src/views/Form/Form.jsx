import { useState } from "react";
import style from "./Form.module.css";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    tipos: "",
    nombre: "",
    ataque: "0",
    defensa: "0",
    velocidad: "0",
    peso: "0",
    altura: "0",
    imagen: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const camposObligatorios = [
      "nombre",
      "altura",
      "imagen",
      "peso",
      "ataque",
      "velocidad",
      "defensa",
    ];

    const campoVacio = camposObligatorios.find((campo) => !form[campo]);

    if (campoVacio) {
      alert(`El campo '${campoVacio}' es obligatorio`);
      return;
    }

    // Validar el campo 'nombre'
    const nombre = form.nombre.trim(); // Eliminar espacios en blanco al inicio y al final

    // Expresión regular para permitir solo letras, espacios y algunos caracteres especiales
    const regexNombre = /^[A-Za-z\s]+$/;

    if (!regexNombre.test(nombre)) {
      alert("El campo 'nombre' contiene caracteres no válidos");
      return;
    }

    axios
      .post("http://localhost:3001/pokemon", form)
      //console.log(form)
      .then((res) => {
        //console.log(res); // Registrar la respuesta del servidor
        alert("Pokemon creado exitosamente");
      })
      .catch((err) => alert("Error al crear pokemon"));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={style.form}>
        <label>Nombre:</label>
        <input
          type="text"
          value={form.nombre}
          onChange={changeHandler}
          name="nombre"
        />
      </div>

      <div>
        <label>Ataque:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={form.ataque}
          onChange={changeHandler}
          name="ataque"
        />
        <span>{form.ataque}</span>
      </div>

      <div>
        <label>Defensa:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={form.defensa}
          onChange={changeHandler}
          name="defensa"
        />
        <span>{form.defensa}</span>
      </div>

      <div>
        <label>Velocidad:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={form.velocidad}
          onChange={changeHandler}
          name="velocidad"
        />
        <span>{form.velocidad}</span>
      </div>

      <div>
        <label>Peso:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={form.peso}
          onChange={changeHandler}
          name="peso"
        />
        <span>{form.peso}</span>
      </div>

      <div>
        <label>Altura:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={form.altura}
          onChange={changeHandler}
          name="altura"
        />
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
          <option value="frutas">Frutas</option>
          <option value="animal">Animal</option>
        </select>
        <span>{form.tipos}</span>

        <div>
          <label>Imagen (URL):</label>
          <input
            type="text"
            value={form.imagen}
            onChange={changeHandler}
            name="imagen"
          />
          {form.imagen && (
            <img
              src={form.imagen}
              alt="Imagen seleccionada"
              style={{ width: "100px", height: "100px", margin: "10px" }}
            />
          )}
        </div>
      </div>

      <button type="submit">Crear Pokemon</button>
    </form>
  );
};

export default Form;
