//traerDatos es función asíncrona
//para convertirla a síncrona
let traerDatos = async () => {
  // return "mi respuesta asincrona!" //return equiv. a resolve
  /*  throw "Error!"//throw equiv. reject */

  if (true) {
    return "tudubem";
  } else {
    throw "Ñe, algo fue mal";
  }
};

/* traerDatos()
.then(respuesta=>{
    console.log(respuesta)
})
.catch(error=>{
    console.log(error)
}) */

//AWAIT: consumo/utilizo promesas sin necesidad de the y catch

let usarDatos = async () => {
  try {
    //intenta
    let miRespuesta = await traerDatos(); //espera
    console.log(miRespuesta); //resuelve la promesa
  } catch (error) {//no funciona
    console.log(error)
  }
};

usarDatos();
