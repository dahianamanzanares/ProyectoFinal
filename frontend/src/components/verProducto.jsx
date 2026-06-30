import { useEffect, useState } from "react";
import { api } from "../api/api";
import '../styles/dashboard.css';

export default function VerProducto() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {

                const res = await api.get("/stock");

                if (Array.isArray(res.data)) {
                    setProductos(res.data);
                } else {
                    setProductos([]);
                }
            } catch (err) {
                console.error("Error al obtener productos:", err);
                setProductos([]);
            }
        };
        obtenerProductos();
    }, []);

    return (
        <div className="card-grid">
            {productos.length > 0 ? (
                productos.map((p) => (
                    <div key={p.id} className="product-card">
                        <h4>{p.name} </h4>
                        <p>{p.description}</p>
                        <p>Id :{p.id}</p>
                        <span className="price">${p.price}</span>
                    </div>
                ))
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
}