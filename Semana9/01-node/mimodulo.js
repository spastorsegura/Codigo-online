const PI=3.14159

const areacirculo=(radio)=>{
    let area=PI*radio*radio
    return area
}

//Exportando para otro archivo JS 
exports.areacirculo=areacirculo
exports.pi=PI