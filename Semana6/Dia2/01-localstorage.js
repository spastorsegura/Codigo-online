//setItem("nombre_clave","dato a guardar") 
window.localStorage.setItem("nombre","Juana Perez")

//getItem("nombre_clave"), obteniendo un dato del LocalStorage
var miNombre=localStorage.getItem("nombre");

console.log(miNombre);

var btnEliminar=document.getElementById("eliminar");

btnEliminar.addEventListener("click",function(){
    console.log("Click!");
    localStorage.removeItem("nombre");
})