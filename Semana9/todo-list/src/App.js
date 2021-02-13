import React,{useState} from 'react'
import ListaComponent from "./components/ListaComponent"

export default function App(){
  let [lista,setlista]=useState(["Estudiar","Ordenar"])

  let actualizarLista=(arrTareas)=>{
    setlista(arrTareas)
  }

  return(
    <div>
      <h1>Tienes {lista.length} tareas</h1>
      <br/>
      <ListaComponent listaTareas={lista}/>
    </div>
  )
}