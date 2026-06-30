import axios from "axios";
import { useState } from "react";

export default function EliminarProducto({ onEliminado }) {
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      alert("Ingrese un ID.");
      return;
    }

    const confirmar = window.confirm(
      "¿Estás seguro de que quieres eliminar este producto?"
    );

    if (!confirmar) return;

    try {
      await axios.delete(`http://localhost:8000/api/stock/${id}`);

      alert("Producto eliminado correctamente.");

      setId("");

      if (onEliminado) {
        onEliminado();
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("El producto no existe.");
      } else {
        console.error(error);
        alert("Ocurrió un error al eliminar.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contents">
      <h3>Eliminar Producto</h3>

      <p>⚠ Verifique el ID antes de eliminar.</p>

      <label>ID del producto</label>

      <input
        className="inputClass"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Ingrese el ID"
        required
      />

      <button className="card-btn" type="submit">
        Eliminar definitivamente
      </button>
    </form>
  );
}
