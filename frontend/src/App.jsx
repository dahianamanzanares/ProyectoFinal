import { useState, useEffect } from "react";
import axios from "axios";

import CrearProducto from "./components/CrearProducto";
import EliminarProducto from "./components/EliminarProducto";
import ModificarProducto from "./components/ModificarProducto";
import Dashboard from "./pages/dashboard"

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
    <Dashboard productos={productos} refresh={cargarProductos} />
  );

}