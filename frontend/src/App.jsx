import { useState, useEffect } from "react";
// Usamos 'api' en lugar de 'axios'
import { api } from "./api/api";

import CrearProducto from "./components/CrearProducto";
import EliminarProducto from "./components/EliminarProducto";
import ModificarProducto from "./components/ModificarProducto";
import Dashboard from "./pages/dashboard";
import LoginRegister from "./pages/loginRegister";

export default function App() {
  const [productos, setProductos] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  const cargarProductos = async () => {
    try {

      const res = await api.get("/stock");


      if (Array.isArray(res.data)) {
        setProductos(res.data);
      } else {
        setProductos([]);
      }
    } catch (err) {
      console.error("Error al conectar con el servidor:", err);
      setProductos([]);
    }
  };

  useEffect(() => {
    if (isLogged) {
      cargarProductos();
    }
  }, [isLogged]);

  return (
    <>
      {!isLogged ? (
        <LoginRegister setIsLogged={setIsLogged} />
      ) : (
        <Dashboard
          productos={productos}
          refresh={cargarProductos}
          setIsLogged={setIsLogged} />
      )}
    </>
  );
}