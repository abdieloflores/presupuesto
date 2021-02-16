import React, { Fragment } from "react";
import { revisarPresupusto } from "../helper";
import PropTypes from 'prop-types';

function ControlPresupuesto({ presupuesto, restante }) {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: ${presupuesto}</div>
      <div className={revisarPresupusto(presupuesto, restante)}>
        Restante: ${restante}
      </div>
    </Fragment>
  );
}

ControlPresupuesto.propTypes={
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default ControlPresupuesto;
