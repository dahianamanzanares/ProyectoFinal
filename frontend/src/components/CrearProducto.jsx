import { useState } from "react";
import axios from "axios";
import '../styles/dashboard.css';

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
        <form onSubmit={handleSubmit} className="contents">
            <h3>Crear nuevo producto</h3>

            <label>Nombre</label>
            <input type="text" className="inputClass" name="name" value={formData.name} onChange={handleChange} required />

            <label>Descripción</label>
            <input type="text" className="inputClass" name="description" value={formData.description} onChange={handleChange} required />

            <label>Precio</label>
            <input type="number" className="inputClass" name="price" value={formData.price} onChange={handleChange} required />

            <button type="submit" className="submit-btn">Crear Producto</button>
        </form>
    );
};