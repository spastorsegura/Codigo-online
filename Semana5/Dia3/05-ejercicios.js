// Necesito un programa que me permita saber cuanto he ganado en todo el 2020, si es que el total de lo ganado es mayor a 10000 se debe reducir el toral en un 8%

// 1.El sueldo por mes
// 2.De ahí necesito sumarlo
// 3.evaluar el monto
// 4.si el monto supera los 10000 quitarle el (8%)

var sueldo=0;

//inicio desde el mes 1 y voy avanzando hasta el mes 12

for(var i=1;i<=12;i++){
    var sueldoxmes =+prompt("Ingrese el sueldo del mes"+i);

    sueldo=sueldo+sueldoxmes;
    console.log("Paso"+i+"-"+sueldo)
}

if(sueldo>10000){
    sueldo=sueldo*0.92;
}

console.log("El sueldo total es:"+sueldo);