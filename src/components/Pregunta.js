import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from 'prop-types';

function Pregunta({ setPresupuesto, setRestante, setMostrarPregunta }) {
  //Definir state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //Funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  //Submit presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    //Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    //Si valida entonces
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto..."
          onChange={definirPresupuesto}
        />
        {error ? <Error mensaje="El presupuesto no es valido." /> : null}
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
}

Pregunta.propTypes={
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setMostrarPregunta: PropTypes.func.isRequired
}

export default Pregunta;
