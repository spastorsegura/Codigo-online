function saludar(nombre,edad){
    var saludo="Hola yo soy "+nombre+"y tengo "+edad+" años";

    return saludo;

    //
    // console.log("Yo estoy después del return");

}

// console.log(saludo);

var miSaludo = saludar("Osmar","veinte");

console.log(miSaludo);

//sin variables

var valor=100;  //variable global

function imprimirValor(){
    console.log(valor);
}

imprimirValor();