import React,{useState} from 'react'
import ListaComponent from "./components/ListaComponent"
import InputComponent from "./components/InputComponent"

export default function App(){
  let [lista,setlista]=useState(["Estudiar","Ordenar","Jugar con mascotas"])

  let actualizarLista=(arrTareas)=>{
    setlista(arrTareas)
  }

  return(
    <div>
      <h1>Tienes {lista.length} tareas</h1>
      <br/>
      <ListaComponent listaTareas={lista}/>
      <hr/>
      <InputComponent listaTareas={lista} actualizarLista={actualizarLista}/>
    </div>
    
  )
}