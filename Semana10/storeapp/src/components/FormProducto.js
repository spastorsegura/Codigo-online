import React, {useState,useEffect} from 'react'

export default function FormProducto() {
    return (
        <div>
            <form>
                <div className="mb-2">
                    <label className="form-label">
                        Nombre Producto
                    </label>
                    <input
                    type="text"
                    placeholder="Ej. Chocolates"
                    name="nombre"
                    className="form-control"
                    ></input>
                </div>
            </form>
        </div>
    )
}
