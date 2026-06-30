import { useState } from "react";
import axios from "axios";
import '../styles/dashboard.css';

export default function CrearProducto() {
    // 1. Usamos estados individuales para que sea más fácil armar el paquete con la imagen
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataForm = new FormData();
        dataForm.append('name', name);
        dataForm.append('description', description);
        dataForm.append('price', price);

        if (image) {
            dataForm.append('image', image);
        }

        try {

            const response = await axios.post('http://localhost:8000/api/stock', dataForm, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            alert("¡Producto creado con éxito!");


            setName('');
            setDescription('');
            setPrice('');
            setImage(null);

        } catch (error) {
            console.error("Error al crear:", error);
            alert("Hubo un error al crear el producto");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contents">
            <h3>Crear nuevo producto</h3>

            <label>Nombre</label>
            <input
                type="text"
                className="inputClass"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label>Descripción</label>
            <input
                type="text"
                className="inputClass"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />

            <label>Precio</label>
            <input
                type="number"
                className="inputClass"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />

            <label>Imagen</label>
            <input
                type="file"
                className="inputClass"
                accept="image/*"
                onChange={handleFileChange}
            />

            <button type="submit" className="submit-btn">Crear Producto</button>
        </form>
    );
}