import { useEffect, useState } from "react";
import axios from "axios";

export default function ModificarProducto({ idProducto, onActualizado }) {
    const [producto, setProducto] = useState({ name: '', description: '', price: '' });
    const [id, setId] = useState(idProducto || "");

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8000/api/stock/${id}`)
                .then(res => setProducto(res.data))
                .catch(err => console.error("Error al cargar datos", err));
        }
        else {
            alert("Error al actualizar el producto");
        }
    }, [id]);

    const handleChange = (e) => {
        setProducto({ ...producto, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/stock/${id}`, producto);
            alert("Producto actualizado con éxito");
            if (onActualizado) onActualizado();
        } catch (error) {
            alert("Error al actualizar el producto");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="input-base">
            <p>Modificar producto</p>

            <label>ID del producto</label>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder="Ej: 1" />
            {id && !producto.name && <p style={{ color: 'red' }}>Producto no encontrado</p>}

            <label>Nombre</label>
            <input type="text" name="name" value={producto.name} onChange={handleChange} />

            <label>Descripción</label>
            <input type="text" name="description" value={producto.description} onChange={handleChange} />

            <label>Precio</label>
            <input type="number" name="price" value={producto.price} onChange={handleChange} />

            <button type="submit">Aplicar cambios</button>
        </form>
    );
}