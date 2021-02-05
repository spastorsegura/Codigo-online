let miHorno =() => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("La torta está ready")
            reject("la torta se quemó, qué sad!")
        },5000)
    })
}
miHorno().then((resultado)=>{
    console.log(resultado)
})
.catch((error)=>{
    console.log(error)
})