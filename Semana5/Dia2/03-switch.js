var mes = +prompt("Ingrese el mes en números")

switch(mes){
  //si mes vale 1
  case 1:
    console.log("Es enero");
    break;
  case 2:
    console.log("Es febrero");
    break;
  case 3:
    console.log("Es marzo");
    break;
  case 4:
    console.log("Es abril");
    break;
  case 5:
    console.log("Es mayo");
    break;
    //si es que no se cumple ninguna de las condiciones anteriores, se ejecuta lo que este dentro de default
  default:
    console.log("Error");
    break;
}