var miContenedor=document.querySelector(".contenedor");

miContenedor.style.color ="#ED20FF";
miContenedor.style.opacity =0.5;

miContenedor.style.borderRadius="10px";

miContenedor.classList.add("brillo");
miContenedor.classList.remove("brillo");

/* miContenedor.classList.remove("brillo");

//setInterval: ejecuta una función cada X tiempo
//toggle: lo que hace es añadir o remover una clase en caso lo encuentr o no.
window.setInterval(function(){
    miContenedor.classList.toggle("brillo");
},500);

window.setInterval(function(){
    console.log("Hola cada segundo")
},1000); */

/* window.setInterval(function(){
    miContenedor.classList.toggle("brillo");
},500); */

//Jugando con el título
var h1=document.querySelector("h1");
console.log(h1);

h1.innerHTML="<code>Título de mi página web</code>";

//Agregando elementos (Nodos)
var cajaVacia=document.getElementById("cajavacia");

//createElement nos permite crear un nuevo Elemento HTML
var nuevoParrafo = document.createElement("p");

nuevoParrafo.innerHTML="Hola soy un nuevo párrafo";

//appendChildrecibe un elemento html y lo pone como hijo
cajaVacia.appendChild(nuevoParrafo);

//crea un nuevo elemento <img>
var imagen=document.createElement("img");

//SetAtrribute, modifica un atributo de un elemento HTML, por eso se necesita dos argumentos setAtributte("queAtributo","ElValorDelAtributo")
imagen.setAttribute("src","https://i.redd.it/6ooxjjkd204y.jpg")

cajaVacia.appendChild(imagen);

imagen.style.width="400px";
