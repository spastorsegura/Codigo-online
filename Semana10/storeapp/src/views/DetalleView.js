import React, {useState,useEffect,Fragment} from 'react'
import {obtenerProductoPorId} from "../services/ProductoService"

export default function DetalleView(props) {
    // console.log(props.match.params.id)
    const productoID = props.match.params.id

const [miProducto,setMiProducto]=useState({})

const getProduct=async()=>{
    let productoObtenido = await obtenerProductoPorId
    setMiProducto(productoObtenido)
}

useEffect(()=>{
    getProduct()
},[])

    return (
        
    )
}
