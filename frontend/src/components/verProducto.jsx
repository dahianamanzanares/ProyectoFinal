import { useEffect, useState } from "react";
import axios from "axios";

export default function VerProducto() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/stock");
                setProductos(res.data);
            } catch (err) {
                console.error("Error al obtener productos:", err);
            }
        };
        obtenerProductos();
    }, []);

    console.log("Productos recibidos:", productos)
    return (
        <div className="card-grid">
            {productos.length > 0 ? (
                productos.map((p) => (
                    <div key={p.id} className="product-card">
                        <h3>{p.name}</h3>
                        <p>{p.description}</p>
                        <span className="price">${p.price}</span>
                    </div>
                ))
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
}