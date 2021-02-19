 import React, {useState,useEffect} from 'react'

 export default function App(){
   let [contador,setContador]=useState(0)
   let [texto,setTexto]=useState("")

   /* se dispara solo cuando cambie contador o mone mi componente */
   useEffect(()=>{
     console.log(`Ejecutandome! ${contador}`)
     //peticiones(fetch),axios
   },[contador])

   /* se dispara solo cuando se monta o cambia texto */
   useEffect(()=>{
     console.log(`Mostrando ${texto}`)
   },[texto])

   /* solo ejecuta cuando monte el componente */
   useEffect(()=>{
     console.log("Fase de montaje")
   },[])
   
   return(
     <div>
       <h1>{contador}</h1>
       <button onClick={()=>{setContador(contador+1)}}>Aumentar</button>
       <button onClick={()=>{setContador(contador-1)}}>Reducir</button>
       <hr/>
       <input 
       value={texto}
       onChange={(e)=>{setTexto(e.target.value)}}
       />
     </div>
   )
 }