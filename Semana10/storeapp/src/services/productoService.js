//pedir algo y devuelve algo. Separa la lógica del componente.
import axios from "axios";

const URL = "https://601e0117be5f340017a1a114.mockapi.io/productos";

const obtenerProductos = async () => {
  try {
    //let peticion=await axios.get(URL)
    //return peticion.data
    let { data } = await axios.get(URL);
    return data;
  } catch (error) {
    return error;
  }
};

const obtenerProductoPorId=async(prod_id)=>{
  try {
    let{data}=await axios.get(`${URL}/${prod_id}`)
  } catch (error) {
    
  }
}
//exporto mis funciones en forma de un objeto
export{
  obtenerProductos
}