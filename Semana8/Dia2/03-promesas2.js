/* Encadenar promesas */
let obtenerCliente = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Se encontró al cliente");
    //   reject("No hay!!!!");
    }, 4000);
  });
};

let obtenerPedidos = () => {
  return new Promise((resolve, reject) => {
    let asistente = new XMLHttpRequest();

    asistente.addEventListener("readystatechange", () => {
      if (asistente.readyState === 4) {
        if (asistente.status === 200) {
          resolve(JSON.parse(asistente.responseText));
        } else {
          reject("No hay!!");
        }
      }
    });

    asistente.open(
      "GET",
      "https://600f6a6c6c21e1001704eaf0.mockapi.io/pedidos"
    );
    asistente.send(null);
  });
};

obtenerCliente()
.then((rpta) => {
  console.log(rpta);
  return obtenerPedidos();
})
.then((rptaPedidos)=>{
    console.log(rptaPedidos)
})
.catch((error)=>{
    console.log(error)
})
