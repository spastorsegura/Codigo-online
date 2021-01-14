//el objetivo de este ejercicio es que creen una función que permita recibir la base y la altura como argumentos y me retorne el área de un triángulo, según esos argumentos

//1.obtener de alguna manera la base y altura
//2.necesito tener una función y dentro hacer la operación
//3.retornar el resultado
//4.imprimir el resultado

//el + hace que lo convierta en número

var base=+prompt("Ingrese la base del triángulo");
var altura=+prompt("Ingrese la altura");


function calcularArea(){
    var area=(base*altura)/2;
    return area;
}

var miArea=calcularArea();
console.log(miArea);