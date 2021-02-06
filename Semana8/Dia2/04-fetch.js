//Haciendo una petición GET con fetch
fetch("https://600f6a5c6c21e1001704eaec.mockapi.io/pedidos")
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



//Haciendo una petición de tipo POST
let objPedido={
    nombre_pedido:"Visión",
    dni_pedido:43212439,
    platillos_pedido:["Arroz Chaufa","Chicha de Jora"],
    fecha_pedido:new Date().getTime()/1000,
    total_pedido:40.00
}

//En fetch, POST/PUT tiene que enviar headers para indicar el tipo de info
let cabecera={
    method:"POST",
    headers:{
        'Content-type':"application/json"
    },//headers
    body:JSON.stringify(objPedido)// conv. a texto
}

//3.Ahora hacemos petición.
//3.1 POST/PUT envair un 2do parámetro
fetch("https://600f6a5c6c21e1001704eaec.mockapi.io/pedidos",cabecera)
.then((respuesta)=>{
    return respuesta.json()//estatus 
})
.then(datos=>{
    console.log(datos)//json() da datos de petición
})
.catch(error=>{
    console.log(error)//por si hay un error
})
