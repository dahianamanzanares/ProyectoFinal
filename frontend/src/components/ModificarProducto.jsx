import { useEffect, useState } from "react";
import axios from "axios";
import '../styles/dashboard.css';

export default function ModificarProducto({ idProducto, onActualizado }) {
    const [producto, setProducto] = useState({ name: '', description: '', price: '' });
    const [id, setId] = useState(idProducto || "");

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8000/api/stock/${id}`)
                .then(res => setProducto(res.data))// condicional
                .catch(err => console.error("Error al cargar datos", err));
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
            if (err.response && err.response.status === 404) {
                setMensaje("Error: El ID no existe.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contents" >
            <h3>Modificar producto</h3>

            <label>ID del producto</label>
            <input className="inputClass" type="number" value={id} onChange={(e) => setId(e.target.value)} />
            {id && !producto.name && <p style={{ color: 'red' }}>Producto no encontrado</p>}

            <label>Nombre</label>
            <input className="inputClass" type="text" name="name" value={producto.name} onChange={handleChange} />

            <label>Descripción</label>
            <input className="inputClass" type="text" name="description" value={producto.description} onChange={handleChange} />

            <label>Precio</label>
            <input className="inputClass" type="number" name="price" value={producto.price} onChange={handleChange} />

            <button className="submit-btn" type="submit">Aplicar cambios</button>
        </form>
    );
}