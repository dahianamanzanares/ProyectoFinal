import { useState, useEffect } from "react";
import axios from "axios";

import CrearProducto from "./components/CrearProducto";
import EliminarProducto from "./components/EliminarProducto";
import ModificarProducto from "./components/ModificarProducto";

export default function App() {
  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/stock");
      setProductos(res.data);
    } catch (err) {
      console.error("Error al conectar con el servidor:", err);
      // No hacemos nada más, así la página no se bloquea
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <div className="container">
      <h1>Gestión de Inventario</h1>

      <CrearProducto onActualizado={cargarProductos} />
      <ModificarProducto onActualizado={cargarProductos} />
      <EliminarProducto onEliminado={cargarProductos} />

    </div>
  );
}