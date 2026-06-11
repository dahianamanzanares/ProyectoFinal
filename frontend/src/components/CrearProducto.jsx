import { useState } from "react";
import axios
    from "axios";

export default function CrearProducto() {
    const [formData, setFormData] = useState({ name: '', description: '', price: '' }); //estado para guardar datos

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value }); // es lo que maneja los cambios
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:8000/api/stock', formData);
        alert("Producto creado");
    } // con esto envío al servidor los datos y me responde que fue creado, falta try catch


    return (
        <form onSubmit={handleSubmit} className="input-base">
            <p>Crear nuevo producto</p>

            <label>Nombre</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Descripción</label>
            <input type="text" name="description" value={formData.description} onChange={handleChange} required />

            <label>Precio</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} required />

            <button type="submit">Crear Producto</button>
        </form>
    );
};