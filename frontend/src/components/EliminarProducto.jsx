import axios from "axios";
import { useState } from "react";

export default function EliminarProducto({ onEliminado }) {
    const [id, setId] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (window.confirm("¿Esás seguro de que quieres eliminar éste producto??")) {
            try {
                await axios.delete(`http://localhost:8000/api/stock/${id}`);
                alert("Producto eliminado exitosamente")
                setId(""); // para que se limpie el input despues de ya hecho
            } catch (error) {
                if (err.response && err.response.status === 404) {
                    setMensaje("Error: El ID no existe.");
                }
            }
        };

    }
    return (

        <form onSubmit={handleSubmit} className="contents">
            <h3>Eliminar Producto</h3>
            <p>**Porfavor verifique id antes de continuar**</p>
            <div className="">
                <label >ID del producto</label>
                <input className="inputClass" type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder="Ej: 1" /> {/* e,target.value , e es evento, target es la propiedad, que toma el elemento , vendría a ser el input, y el value es el dato específico, en este caso 1 por el ejemplo. y se uda para guardar el dato en use state*/}
            </div>
            <button type="submit">Eliminar definitivamente</button>
        </form>
    )
};
