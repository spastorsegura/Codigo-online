import React, {useState} from "react";

export default function FormCategoria() {
    const [nombreCategoria,setNombreCategoria]=useState("")

  return (
    <div>
      <form>
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
          <button type="submit" className="btn btn-primary">Crear categoría</button>
        </div>
        
      </form>
    </div>
  );
}
