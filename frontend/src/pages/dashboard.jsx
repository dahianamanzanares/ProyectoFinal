import { useState } from "react";

import Home from "./home";

import VerProducto from "../components/verProducto";
import CrearProducto from "../components/CrearProducto";
import ModificarProducto from "../components/ModificarProducto";
import EliminarProducto from "../components/EliminarProducto";

function Dashboard({ productos, refresh }) {
  const [vista, setVista] = useState("home");

  const renderVista = () => {
    switch (vista) {
      case "home":
        return <Home />;

      case "ver":
        return <VerProducto productos={productos} refresh={refresh} />;

      case "crear":
        return <CrearProducto refresh={refresh} />;

      case "editar":
        return <ModificarProducto productos={productos} refresh={refresh} />;

      case "eliminar":
        return <EliminarProducto productos={productos} refresh={refresh} />;

      default:
        return <Home />;
    }
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />

          <div>
            <h2>TECH STORE</h2>

            <span>Tecnología a tu alcance</span>
          </div>
        </div>

        <div className="menu">
          <button
            className={vista === "home" ? "active" : ""}
            onClick={() => setVista("home")}
          >
            Home
          </button>

          <button
            className={vista === "ver" ? "active" : ""}
            onClick={() => setVista("ver")}
          >
            Ver Productos
          </button>

          <button
            className={vista === "crear" ? "active" : ""}
            onClick={() => setVista("crear")}
          >
            Agregar
          </button>

          <button
            className={vista === "editar" ? "active" : ""}
            onClick={() => setVista("editar")}
          >
            Actualizar
          </button>

          <button
            className={vista === "eliminar" ? "active" : ""}
            onClick={() => setVista("eliminar")}
          >
            Eliminar
          </button>
        </div>

        <button
          className="logout"
          onClick={() => (window.location.href = "/login")}
        >
          Cerrar sesión
        </button>
      </nav>

      <main className="content">{renderVista()}</main>
    </div>
  );
}

export default Dashboard;
