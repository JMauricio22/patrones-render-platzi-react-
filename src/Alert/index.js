import React from "react";
import "./Alert.css";
import { withStorageListener } from "./withStorageListener";

function Alert({ show, toggle }) {
  if (show) {
    return (
      <div className='alert'>
        <h2 className='alert__title'>Cambios Detectados</h2>
        <p className='alert__text'>
          Se detectaron nuevos cambios en tu lista de tareas.
        </p>
        <button className='alert__btn' onClick={toggle}>
          Refrescar
        </button>
      </div>
    );
  }

  return null;
}

const AlertWithStorageListener = withStorageListener(Alert);

export { AlertWithStorageListener };
