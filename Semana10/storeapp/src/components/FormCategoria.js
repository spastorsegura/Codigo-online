import React, {useState} from "react";
import {crearCategoria} from '../services/categoriaService'

export default function FormCategoria() {
    const [nombreCategoria,setNombreCategoria]=useState("")

    const manejarSubmit = async (ev)=>{
        //prevenimos que se ejecute el evento por defecto submit
        ev.preventDefault()

        //crea objeto como pide el backend
        let objCategoria = {
            nombre:nombreCategoria
        }
        //hago petición
        let response = await crearCategoria(objCategoria)
        console.log(response)
    }

  return (
    <div>
      <form onSubmit={(ev)=>{}}>
        <div className="mb-2">
          <label className="form-label">Nombre de la categoría</label>
          <input 
          className="form-control" 
          type="text"
          value={nombreCategoria}
          onChange={(e)=>{setNombreCategoria(e.target.value)}}
          />
          <small className="form-text">
              Ej.:Ofertas o regalos
          </small>
          
        </div>
        <button type="submit" className="btn btn-primary">Crear categoría</button>
        
      </form>
    </div>
  );
}
