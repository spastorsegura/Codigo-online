import React from "react";
import {Link} from "react-router-dom"
import "./css/estilos.css"  // usa extensión cuando no es js

export default function Tarjeta({producto}) {
  return (
    <div className="col-sm-12 col-lg-6 col-xl-3">
      <div className="card mb-2">
        <img src={producto.imagen} alt="..." />
        <div className="card-body d-grid justify-content-center">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="font-weight-bold">Precio: S/ {producto.precio}</p>
        </div>

        <div className="card-footer">
          <div className="d-grid">
          <Link className="btn btn-primary btn-sm btn-flores" to={`/detalle/${producto._id}`} style={{borderRadius:'20px'}}> Ver detalles</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
