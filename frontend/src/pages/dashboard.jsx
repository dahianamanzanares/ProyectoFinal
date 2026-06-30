import { useState, useEffect } from "react";
import '../styles/dashboard.css';
import Navbar from "../components/navbar";


import CrearProducto from "../components/CrearProducto";
import EliminarProducto from "../components/EliminarProducto";
import ModificarProducto from "../components/ModificarProducto";
import VerProducto from "../components/VerProducto";

export default function Dashboard({ setIsLogged, setPagina }) {
    const [vista, setVista] = useState('ver');

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLogged(false);
    }

    return (<>
        <Navbar setPagina={setPagina} isLogged={false} />
        <div className="dashboard-container">
            <div className="main-container">
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
    </>);
}