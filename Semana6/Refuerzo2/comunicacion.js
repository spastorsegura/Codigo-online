// 1. va a recibir el nombre, dni, fecha, carrito, total para luego enviarlo a mockAPI
function enviarBoleta(nombre,dni,fecha,carrito,total){
    // 2. necesito crear un objeto con el formato que tiene mockapi pero con los datos que estoy recibiendo en la función

    //necedito que se un objeto para enviarlo
    let objBoleta={
        //Tiene que tener el formato de mockapi
        nombre_pedido:nombre,
        dni_pedido:dni,
        fecha_pedido:fecha,
        platillos_pedido:carrito,
        total_pedido:total
    }
    // 3. creamos el asistente que me va a permitir hacer la petición y avisarme cuando ya esté listo

    let asistente=new XMLHttpRequest();
    // 3.1 este objeto/asistente va  atener un evento que es readystatechange, es como cuando nos dan un código de aliexpress y con eso podemos hacer seguimiento del estado

    asistente.addEventListener("readystatechange",funtion(){
        if(asistente.readyState===4){
            console.log(asistente.responseText)
        }

        asistente.open("POST","https://600f6a5c6c21e1001704eaec.mockapi.io/pedidos");
        // 4.1 configurar mis headers (guia de remisión)
        //vamos a indicar que estamos enviando, en este caso un JSON
        asistente.setRequestHeader("ContentType","application/json")
        //4.2 al mandar un ta mandamis nuestro objBoleta, pero como tenemos que mandarlo en un formato JSON, lo transformaremos de objeto a texto con JSON.stringify
        let objAJSON=JSON.stringify(objBoleta)
        asistente.send(objAJSON)
    })
}


