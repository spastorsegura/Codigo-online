import React from 'react'

export default function ListaComponent({listaTareas}){
    return(
        <div>
            <ul>
                {listaTareas.map((tarea)=>(
                    <li>{tarea}</li>
                ))}
            </ul>
        </div>
    )
}