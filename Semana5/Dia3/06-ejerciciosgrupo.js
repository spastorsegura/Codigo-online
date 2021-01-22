// 1. Desarrolle una función que reciba como argumento un número, la función debe retornar si este número es par o impar

/* var num = prompt("Ingrese un número");
var esPar = false;

if(num%2==0){
    console.log("El número es par")
}
else{
    console.log("El número es impar")
} */

// 2.Desarrolle una función que permita saber si un número es primo o no (que solo sea divisible entre si mismo o 1), debe retornar como respuesta un booleano.

/* var num =+ prompt("Ingrese un número");
var n=0;
var esPrimo = false;


for(i=1;i<=num;i++){
    if(num%i===0){
        n++;
    }
}

if(n===2){
    console.log("El número "+num+" es primo");
}
else{
    console.log("El número "+num+" no es primo");
} */


// 3.Desarrolle un algoritmo que le permita vender dos tipos de Hamburguesa, los tipos son Simple (5 Soles) y Doble (9 Soles), aparte el usuario puede indicar una cantidad de hamburguesas según el tipo que haya pedido, se debe mostrar el costo total (Tipo de Hamburguesa x Cantidad)

/* var tipoHamb= +prompt("Elija el tipo de hamburguesa: 1-simple, 2-doble");
var n= +prompt("Coloque la cantidad");
var CT;

switch(tipoHamb){
    case 1:
        CT=5*n;
        console.log("El costo total es "+CT);
        break;
    case 2:
        CT=9*n;
       console.log("El costo total es "+CT);
        break;
    default:
    console.log("Error");
    break;
} */

// 4.Escriba una función que reciba como argumento un arreglo de números, la función debe ordenar ese arreglo de menor a mayor y retornar la suma de todos los números de ese arreglo.

var arreglo = [5,6,8,1,9];

function ordenar(){
    for (i=0; i < arreglo.length; i++) {
        if(arreglo[i+1]<arreglo[i]){
            arreglo[i].length=arreglo[i+1].length;
            arreglo[i+1].length=arreglo[i].length;
        }
    }
    console.log(arreglo);
}

ordenar();

// 5. Realice un algoritmo que me sirva para hacer un inventario de 03 tipos de producto (jugo, galletas y jabón), el algoritmo preguntará primero cuántos productos tienen, y después debe preguntar qué tipo de producto esta contando y sumar las cantidades por tipo. Al final, debe mostrar un resumen de las cantidades por tipo.