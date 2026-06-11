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
                alert("Error: por favor verifique que el id existe");
            }
        };

    }
    return (

        <form onSubmit={handleSubmit} className="input-base">
            <p>Eliminar Producto</p>
            <p>**Porfavor verifique id antes de continuar**</p>
            <label >ID del producto</label>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder="Ej: 1" /> {/* e,target.value , e es evento, target es la propiedad, que toma el elemento , vendría a ser el input, y el value es el dato específico, en este caso 1 por el ejemplo. y se uda para guardar el dato en use state*/}
            <button type="submit">Eliminar definitivamente</button>
        </form>
    )
};
