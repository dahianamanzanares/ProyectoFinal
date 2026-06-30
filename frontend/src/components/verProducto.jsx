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

  return (
    <div className="card-grid">
      {productos.length > 0 ? (
        productos.map((p) => (
          <div key={p.id} className="product-card">
            <img src="/banner.png" alt={p.name} className="product-image" />

            <h3>{p.name}</h3>

            <p className="description">{p.description}</p>

            <span className="price">${p.price}</span>

            <button className="card-btn">Ver detalle</button>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
}
