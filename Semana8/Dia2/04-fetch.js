fetch("https://600f6a6c6c21e1001704eaf0.mockapi.io/pedidos")
.then(respuesta=>{
    // console.log(respuesta)
    return respuesta.json()
})
.then(datos=>{
    console.log(datos)
})
.catch((error)=>{
    console.log(error)
})