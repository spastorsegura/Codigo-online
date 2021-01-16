var nombre="Rosa";

var arreglo = [0,1,2,3,4,5];

console.log(arreglo.length)
console.log(nombre.length)

//push- añade un item al final de mi arreglo
arreglo.push(20);

console.log(arreglo)

//Todo es un objeto
var bebida = new String("Margarita") //constructor

// console.log(typeof bebida);
// console.log(bebida);

//Objetos estándar
//instaciar
var hoy=new Date();

console.log(hoy);

console.log(hoy.getFullYear());

var fecha = new Date("Sat, 4 feb 2012");

console.log(fecha);

//año,mes,día - detalle! en el caso del mes va de 0 a 11
var fecha2=new Date(2021,1,6);

console.log(fecha2);

//cambiar a milisegundos, 1970-01-01
console.log(fecha2.getTime());
