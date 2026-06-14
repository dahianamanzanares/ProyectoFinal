import { useState, useEffect } from "react";
import axios from "axios";

import CrearProducto from "../components/CrearProducto";
import EliminarProducto from "../components/EliminarProducto";
import ModificarProducto from "../components/ModificarProducto";
import VerProducto from "../components/VerProducto";

export default function Dashboard() {
    const [vista, setVista] = useState('ver'); //estado para vontrolar lo que se muestra

    return (
        <div className="full-container">
            <div className="main-container">

                <div className="superior-row">
                    <div className="logo">Anima</div>
                    <button className="nav.button">Cerrar sesión</button>
                </div>

                <div className="nav-row">
                    <button className={`nav-btn ${vista === 'ver' ? 'active' : ''}`} onClick={() => setVista('ver')}>Ver</button>
                    <button className={`nav-btn ${vista === 'agregar' ? 'active' : ''}`} onClick={() => setVista('agregar')}>Agregar</button>
                    <button className={`nav-btn ${vista === 'actualizar' ? 'active' : ''}`} onClick={() => setVista('actualizar')}>Actualizar</button>
                    <button className={`nav-btn ${vista === 'eliminar' ? 'active' : ''}`} onClick={() => setVista('eliminar')}>Eliminar</button>
                </div>


                <div className="content-area">
                    {vista === 'ver' && <VerProducto />}
                    {vista === 'agregar' && <CrearProducto />}
                    {vista === 'actualizar' && <ModificarProducto />}
                    {vista === 'eliminar' && <EliminarProducto />}
                </div>

            </div>
        </div>
    );
}