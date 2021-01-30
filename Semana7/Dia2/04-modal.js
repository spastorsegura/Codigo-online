let miBoton = document.getElementById("miBoton");

let miModal=new bootstrap.Modal(document.getElementById("exampleModal"));

/* Aquí vamos a activar el método show() que encontramos en la documentación */

miBoton.addEventListener("click",function(){
    miModal.show();
})


setTimeout(function(){
    miModal.show()
},1000)
