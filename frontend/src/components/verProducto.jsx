import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function VerProducto() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                // Usamos api.get para que viaje el token
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
                        <h4>{p.name} Id :{p.id}</h4>
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