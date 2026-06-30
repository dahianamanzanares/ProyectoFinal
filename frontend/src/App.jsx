import { useState, useEffect } from "react";
import axios from "axios";

import Dashboard from "./pages/dashboard";

function App() {
  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/stock");
      setProductos(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return <Dashboard productos={productos} refresh={cargarProductos} />;
}

export default App;
