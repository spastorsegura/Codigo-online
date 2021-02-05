let db_alumnos=["Ricardo","Sandra","Juan","David","Paul"]

/* Esta función va a recibir 2 cosas, 
1. el nombre a buscar
2. una función... un callback*/
let buscarAlumno = (nombre, funcioncallback) =>{
    /* Vamos a poner la forma de buscar a mi alumno para simular que esa búsqueda va a demorar utilizaremos un setTimeout */
    setTimeout(()=>{
        for(let i=0;i<db_alumnos.length;i++){
            /* el nombre que estoy revisando es el que he recibido? */
            if(nombre===db_alumnos[i]){
                //encontrado
                funcioncallback(i)
                return //Cuando yo ejecuto un return, se corta la ejecución de mi función buscarAlumno.
            }
        }
        /* Si es que for termina y nunca encontramos nada igual hay que dar una respuesta y daré un -1 en la función callaback para indicar que no encontre nada */
        funcioncallback(-1)
    },3000)
}

//La idea de utilizar un callback es darle una tarea a ejecutar después que termine de realizar una tarea que demore

buscarAlumno("David",(posicion)=>{
    if(posicion!=-1){
        console.log(`El alumno existe! y está en la posición ${posicion}`)
    }else{
        console.log("No existe :(")
    }
})