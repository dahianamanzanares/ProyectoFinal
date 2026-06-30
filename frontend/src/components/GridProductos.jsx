import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/home.css'; // Asegúrate de tener los estilos aquí

export default function GridProductos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/stock')
            .then(res => setProductos(res.data))
            .catch(err => console.error("Error al obtener productos:", err));
    }, []);

    return (
        <div className="grid-container">
            {productos.map((prod) => (
                <div key={prod.id} className="card-producto">
                    {prod.image ? (
                        <img
                            src={`http://localhost:8000/uploads/${prod.image}`}
                            alt={prod.name}
                        />
                    ) : (
                        <div className="no-image">Sin imagen</div>
                    )}

                    <h3>{prod.name}</h3>
                    <p className="descripcion">{prod.description}</p>
                    <p className="precio">${prod.price}</p>
                    <button className="btn-comprar">Solicitar Información</button>
                </div>
            ))}
        </div>
    );
}