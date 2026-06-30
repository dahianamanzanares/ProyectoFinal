import { useEffect, useState } from "react";
import axios from "axios";

export default function ModificarProducto({ idProducto, onActualizado }) {
  const [producto, setProducto] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [id, setId] = useState(idProducto || "");

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/api/stock/${id}`)
        .then((res) => {
          setProducto(res.data);
        })
        .catch((error) => {
          console.error("Error al cargar el producto:", error);

          setProducto({
            name: "",
            description: "",
            price: "",
          });
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      alert("Ingrese un ID.");
      return;
    }

    try {
      await axios.put(`http://localhost:8000/api/stock/${id}`, producto);

      alert("Producto actualizado con éxito.");

      if (onActualizado) {
        onActualizado();
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("El producto no existe.");
      } else {
        console.error(error);
        alert("Ocurrió un error al actualizar.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contents">
      <h3>Modificar Producto</h3>

      <label>ID del producto</label>

      <input
        className="inputClass"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Ingrese el ID"
        required
      />

      <label>Nombre</label>

      <input
        className="inputClass"
        type="text"
        name="name"
        value={producto.name}
        onChange={handleChange}
      />

      <label>Descripción</label>

      <input
        className="inputClass"
        type="text"
        name="description"
        value={producto.description}
        onChange={handleChange}
      />

      <label>Precio</label>

      <input
        className="inputClass"
        type="number"
        name="price"
        value={producto.price}
        onChange={handleChange}
      />

      <button className="inputClass" type="submit">
        Aplicar cambios
      </button>
    </form>
  );
}
