import { useEffect, useState } from "react";
import axios from "axios";
import '../styles/dashboard.css';

export default function ModificarProducto({ idProducto, onActualizado }) {
    const [producto, setProducto] = useState({ name: '', description: '', price: '' });
    const [id, setId] = useState(idProducto || "");
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8000/api/stock/${id}`)
                .then(res => setProducto(res.data))
                .catch(err => console.error("Error al cargar datos", err));
        }
    }, [id]);

    const handleChange = (e) => {
        setProducto({ ...producto, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataForm = new FormData();
        dataForm.append('name', producto.name);
        dataForm.append('description', producto.description);
        dataForm.append('price', producto.price);

        if (image) {
            dataForm.append('image', image);
        }

        try {

            await axios.put(`http://localhost:8000/api/stock/${id}`, dataForm, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert("Producto actualizado con éxito");
            if (onActualizado) onActualizado();
        } catch (error) {
            console.error("Error al actualizar:", error);
            alert("Error al actualizar el producto");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contents">
            <h3>Modificar producto</h3>

            <label>ID del producto</label>
            <input className="inputClass" type="number" value={id} onChange={(e) => setId(e.target.value)} />

            <label>Nombre</label>
            <input className="inputClass" type="text" name="name" value={producto.name} onChange={handleChange} />

            <label>Descripción</label>
            <input className="inputClass" type="text" name="description" value={producto.description} onChange={handleChange} />

            <label>Precio</label>
            <input className="inputClass" type="number" name="price" value={producto.price} onChange={handleChange} />

            {/* 3. Input de archivo añadido */}
            <label>Nueva Imagen (opcional)</label>
            <input type="file" className="inputClass" accept="image/*" onChange={handleFileChange} />

            <button className="submit-btn" type="submit">Aplicar cambios</button>
        </form>
    );
}