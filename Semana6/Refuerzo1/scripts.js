let lista = document.getElementById("divplatillos");
let compra = document.getElementById("divcarrito");

let carrito = [];


function imprimirPLatillos() {

  let platillosHtml = "";
  for (let i = 0; i < platillos.length; i++) {

    platillosHtml =
      platillosHtml +
      `<div class="tarjeta">
            <h4>${platillos[i].nombre}</h4>
            <div class="imagen">
                <img src="${platillos[i].imagen}">
            </div>
            <p>
                ${platillos[i].descripcion}
            </p>
            <p>
                <span>Precio: </span>
                ${platillos[i].precio}
            </p>
            <p>
                <span>Stock: </span>
                ${platillos[i].stock}
            </p>
            <button class="boton">
                Agregar al carrito
            </button>
        </div>`;
  }
  lista.innerHTML = platillosHtml;
  obtenerBotones();
}

imprimirPLatillos();

function obtenerBotones() {
  let listaBotones = document.getElementsByClassName("boton");

  for (let j = 0; j < listaBotones.length; j++) {
    listaBotones[j].addEventListener("click", function(){
      anadirACarrito(j)
    });
  }
}

function anadirACarrito(indice){
  if(platillos[indice].stock <= 0){
    alert("No hay stock!!!")
  }else{
    carrito.push(platillos[indice])
    platillos[indice].stock--
    imprimirPLatillos();

    imprimirCarrito();
  }
}

function imprimirCarrito(){
    let contenidoBoleta="";
    let totalBoleta=0

    if(carrito.length<=0){
        compra.innerHTML="El carrito está vacío"
    }else{
        for(let x=0;x<carrito.length;x++){
            contenidoBoleta=contenidoBoleta+
            `<tr>
                <td>${carrito[x].nombre}</td>
                <td>${carrito[x].precio}</td>
            </tr>
            `
            //
            totalBoleta=totalBoleta+carrito[x].precio;
        }

        let boletaHtml = `
        <table class="boleta">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                ${contenidoBoleta}
                <tr>
                
                </tr>
            </tbody>

        </table>
        `
        compra.innerHTML=boletaHtml;

    }
}
imprimirCarrito();