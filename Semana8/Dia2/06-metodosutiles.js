/* let numeros=[20,10,15,60,85,11,16]

numeros.forEach(()=>{

}) */

//FILTER

let notas=[20,19,18,14,12,12,13,11,06,15]

let aprobados=notas.filter((item)=>{
    /* if(item>13){
        return item
    } */
    return item>13
})

console.log()