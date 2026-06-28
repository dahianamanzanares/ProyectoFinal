import { useState, useEffect } from "react";
import axios from "axios";

import CrearProducto from "./components/CrearProducto";
import EliminarProducto from "./components/EliminarProducto";
import ModificarProducto from "./components/ModificarProducto";
import Dashboard from "./pages/dashboard"
import LoginRegister from "./pages/loginRegister";

export default function App() {
  const [productos, setProductos] = useState([]);
  const [isLogged, setIsLogged] = useState(false); // Estado para controlar el acceso, dependiendo si esta loggeado o no

  const cargarProductos = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/stock");
      setProductos(res.data);
    } catch (err) {
      console.error("Error al conectar con el servidor:", err);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <>

      {!isLogged ? ( //si no esta loggeado, lo lleva a loginRegister

        <LoginRegister setIsLogged={setIsLogged} />
      ) : (

        <Dashboard productos={productos} refresh={cargarProductos} /> //una vez ya loggeado, ahora si el dashboards
      )}
    </>
  );
}