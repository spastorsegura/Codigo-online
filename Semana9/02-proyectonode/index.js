const axios=require('axios')

/* petición similar a fetch*/
axios.get("https://reqres.in/api/users?page=2")
.then(respuesta=>{
    console.log(respuesta)
})
.catch(error=>console.log(error))