/* Hacer las peticiones GET, POST, PUT, DELETE */

const URL='https://601f26e9b5a0e9001706a325.mockapi.io/'

class Network{
    obtenerProductos(){//GET
        return new Promise((resolve,reject)=>{
            fetch(`${URL}productos`)
            .then(respuesta=>{
                return respuesta.json() //obtengo datos
            })
            .then(misProductos=>{
                resolve(misProductos)
            })
            .catch(error=>reject(error))
        })
    }

    crearProducto(objProducto){//POST, recibe lo que va enviar
        return new Promise((resolve,reject)=>{
            let configuracion={
                method:"POST",
                body:JSON.stringify(objProducto),//convertir a texto
                headers:{"content-type":"application/json"}
            }
            fetch(`${URL}productos`,configuracion)
            .then(respuesta=>{
                return respuesta.json()
            })
            .then(productoCreado=>{
                resolve(productoCreado)
            })
            .catch(error=>reject(error))
        })
    }
}