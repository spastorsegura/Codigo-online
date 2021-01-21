//obtener elementos a partir del ID
var parrafo=document.getElementById("parrafo");

console.log(parrafo);

parrafo.style.color = "red";

//obtener elementos a partir de la clase
var elementosSecundarios=document.getElementsByClassName("secundario");
console.log(elementosSecundarios);

//obtener elementos a partir de su etiqueta
var misParrafos = document.getElementsByTagName("p");
console.log(misParrafos);

/* for(var i=0;i<misParrafos.length;i++){
    misParrafos[i].style.border="2px solid green"
}
 */

 //obtener elementos utilizando un selector como el de CSS
 var query=document.querySelector(".titulo");

 console.log(query);

 var queries = document.querySelectorAll(".secundario");

 console.log(queries);
