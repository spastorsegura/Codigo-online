import axios from 'axios'


const URL="https://backfloresv1.herokuapp.com/api/v1/categorias"

const obtenerCategorias = async () => {
    try {
        let {data} = await axios.get(URL)
        return data.content
    } catch (error) {
        return error
    }
}

const crearCategoria = async (objCategoria) => {
    try {
        let headers={
            "content-type":"application/json"
        }
        let{data} = await axios.post(URL,objCategoria,{headers})
        return data.content
    } catch (error) {
        return error
    }
}

export{
    obtenerCategorias,
    crearCategoria
}