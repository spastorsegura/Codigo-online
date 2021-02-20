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
        
    } catch (error) {
        
    }
}

export{
    obtenerCategorias,
    crearCategoria
}