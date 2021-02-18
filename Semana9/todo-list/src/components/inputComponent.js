import React, {useState} from "react";

export default function InputComponent({listaTareas,actualizarLista}) {
console.log(listaTareas)

const[tareaNueva, setTareaNueva] = useState("")

  return (
    <div>
      <input type="text"
      placeholder="Agregar tarea"
      value={tareaNueva}
      onChange={(e)=>{setTareaNueva(e.target.value)}}
      />
      <button>Agregar</button>
      <button onClick={()=>{actualizarLista([...listaTareas,tareaNueva])}}>
        Agregar
      </button>
    </div>
  );
}
