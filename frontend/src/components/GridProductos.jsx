import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/home.css';

export default function GridProductos() {
    const [productos, setProductos] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/stock')
            .then(res => setProductos(res.data))
            .catch(err => console.error("Error al obtener productos:", err));
    }, []);

    return (
        <>
            <div className="grid-container">
                {productos.map((prod) => (
                    <div key={prod.id} className="card-producto">
                        {prod.image ? (
                            <img src={`http://localhost:8000/uploads/${prod.image}`} alt={prod.name} />
                        ) : (
                            <div className="no-image">Sin imagen</div>
                        )}
                        <h3>{prod.name}</h3>
                        <p className="precio">${prod.price}</p>

                        <button className="btn-info" onClick={() => setProductoSeleccionado(prod)}>
                            Más Información
                        </button>
                    </div>
                ))}
            </div>


            {productoSeleccionado && (
                <div className="modal-overlay" onClick={() => setProductoSeleccionado(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setProductoSeleccionado(null)}>X</button>

                        <img src={`http://localhost:8000/uploads/${productoSeleccionado.image}`} alt={productoSeleccionado.name} />
                        <h2>{productoSeleccionado.name}</h2>
                        <p>{productoSeleccionado.description}</p>
                        <p className="precio-modal">Precio: ${productoSeleccionado.price}</p>

                        <button className="whatsapp-btn">
                            <a href={`https://wa.me/598XXXXXXXXX?text=Hola, quiero info sobre ${productoSeleccionado.name}`} target="_blank" rel="noreferrer">
                                Consultar por WhatsApp
                            </a>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}