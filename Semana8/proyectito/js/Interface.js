/* Encargarse de interactuar en lo posible con el DOM (html) */

class Interface {
  imprimirProductos(arregloProductos) {
    //pone algo en el DOM, saca de un lado.
    const contenido = document.getElementById("contenido");
    //estadoContenido va a guardar el contenido

    //opc1, map trabaja en array
    let estadoContenido = arregloProductos.map((producto) => {
      let cardProducto = `<div class="col-lg-3 col-md-6 col-sm-12 mb-2">
      <div class="card">
        <img class="card-img-top" src="${producto.producto_imagen}">
        <div class="card-body">
          <h5 class="card-title">
            ${producto.producto_nombre}
            <p class="card-text">
              ${producto.producto_descripcion}
            </p>
            <p class="card-text">
              Precio: ${producto.producto_precio}
            </p>
          </h5>
        </div>
      </div>
    </div>
`;
      return cardProducto;
    });
    //como es un arreglo de Strings, utilizo join para unir
    let htmlContenido = estadoContenido.join("");
    //cards en HTML pasamos a "contenido"
    contenido.innerHTML = htmlContenido;

    // console.log(estadoContenido)

    //opc2, con desestructuración
    /* let estadoContenido=arregloProductos.map(({producto_id, producto_nombre, producto_descripcion, producto_imagen})=>{
            return producto_nombre
        }) */

    // console.log(estadoContenido);
  }
}
