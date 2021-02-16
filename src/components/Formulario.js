import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from 'prop-types';

function Formulario({ setGasto, setCrearGasto }) {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //Funcion cuando el ususario agrega un gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    //Validar gasto
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //Construir el gasto
    const gasto = {
      nombre: nombre,
      cantidad: cantidad,
      id: shortid.generate(),
    };
    //Pasar el gasto al componente principal
    setGasto(gasto);
    setCrearGasto(true);
    //Resetear el form
    setNombre("");
    setCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí.</h2>

      <div className="campo">
        <label>Nombre del gasto:</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad del gasto:</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 250"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto." />
      ) : null}
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Guardar gasto"
      />
    </form>
  );
}

Formulario.propTypes={
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired
}

export default Formulario;
