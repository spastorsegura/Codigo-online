//LocalStorage, solo guarda texto

//1. Obtenemos los elementos que necesitamos
var formulario=document.getElementById("registro");
var inputNombre = document.getElementById("nombre");
var inputApellido=document.getElementById("apellidos");
var inputEdad=document.getElementById("edad");

//2.Ponemos un eventListener
formulario.addEventListener("submit",function(evento){
     //En el caso de un ev submit, tengo que hacer un preventDefault para que no se recargue la pestaña
    evento.preventDefault();
    // console.log("submit");

    var objUsuario={
        nombre:inputNombre.value,
        apellidos:inputApellido.value,
        edad:inputEdad.value
    }
    // imprimo el objeto
    // // console.log(objUsuario)

    //3.me toca guardar los datos, pero para guardar los voy a tener que convertirlos a texto.
    //JSON,es un objeto que existe dentro de JS
    var objATexto=JSON.stringify(objUsuario) //convierto a texto
    console.log(objATexto)
// 4. como y está en texto, loguardo en el Local Storage
    localStorage.setItem("usuario",objATexto);

// localStorage.setItem('objUsuario', JSON.stringify(objUsuario)); // Una forma más rápida de declarar
})


// *****************************
var btnVerUsuario=document.getElementById("verUsuario");

btnVerUsuario.addEventListener("click",function(){
    var usuarioObtenido=localStorage.getItem("usuario");
    // console.log(usuarioObtenido)
    
    // Transformar texto a JS // JSON.parse convierte texto a una estructura de JS 
    var TextoAJavascript=JSON.parse(usuarioObtenido);
    console.log(TextoAJavascript);
})

