import React from "react";

export default function FormCategoria() {
  return (
    <div>
      <form>
        <div className="mb-2">
          <label className="form-label">Nombre de la categoría</label>
          <input className="form-control" type="text"/>
          <small className="form-text">
              Ej.:Ofertas o regalos
          </small>
          <button type="submit" className="btn btn-primary">Crear categoría</button>
        </div>
        
      </form>
    </div>
  );
}
