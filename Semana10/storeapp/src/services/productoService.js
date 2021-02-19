//pedir algo y devuelve algo. Separa la lógica del componente.
import axios from "axios";

// const URL = "https://601e0117be5f340017a1a114.mockapi.io/productos";
const URL = "https://backfloresv1.herokuapp.com/api/v1/";

const obtenerProductos = async () => {
  try {
    //let peticion=await axios.get(URL)
    //return peticion.data
    let { data } = await axios.get(URL);
    return data.content;
  } catch (error) {
    return error;
  }
};

const obtenerProductoPorId=async(prod_id)=>{
  try {
    let{data}=await axios.get(`${URL}/${prod_id}`)
    return data.content
  } catch (error) {
    return(error)
  }
}
//exporto mis funciones en forma de un objeto
export{
  obtenerProductos,
  obtenerProductoPorId
}