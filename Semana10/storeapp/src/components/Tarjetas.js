import React, {useState,useEffect} from 'react'
import Tarjeta from "./Tarjeta"
import {obtenerProductos} from "../services/productoService"

export default function Tarjetas() {
  const [productos,setProductos]=useState([])

  const getProducts=async()=>{
    let data=await obtenerProductos()
    setProductos(data)
  }

  //con esto llamo a getProducts solamente en el montaje de mi componente
  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div className="row">
      {
        productos.map((prod, i)=>(
          <Tarjeta producto={prod} key={i}/>
        ))
      }
    </div>
  )
}


