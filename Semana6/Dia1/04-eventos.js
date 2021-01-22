// Escuchando eventos

var miBoton=document.getElementById("boton");

//Este addEventListener("Evento",función)
miBoton.addEventListener("click",function(event){
    console.log(event);
    alert("Haz dado clic!");
})

var miLink = document.getElementById("link");

// miLink.setAttribute("target","_blank")

miLink.addEventListener("click",function(evento){
    console.log(evento);
    evento.preventDefault();
    console.log("Click en el link");
})

//-------------------------

var inputtexto=document.getElementById("inputtexto");
var btntexto=document.getElementById("botoninput");
var divLista=document.getElementById("lista");

btntexto.addEventListener("click", function(){
    console.log(inputtexto.value);
})
//keydown(cuando se apreta),keypress(se mantiene),keyup(apretas y sueltas)

//
/* inputtexto.addEventListener("keyup",function(e){
    console.log(e)
    if(e.key==="Enter"){
        console.log(inputtexto.value)
        
    }
    // console.log(e)
})
 */

inputtexto.addEventListener("keyup",function(e){
    if(e.key==="Enter"){
        console.log("Enter!!")
        console.log(e)
        var nuevoParrafo = document.createElement("p");
        nuevoParrafo.innerHTML=inputtexto.value;
        divLista.appendChild(nuevoParrafo)
        inputtexto.value="";
    }
    
})
