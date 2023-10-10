import { useEffect } from "react";

export default function SelectCategorias({
  eventos,
  categorias,
  setFiltrados,
}) {

    
  useEffect(() => {
    console.log("eventos >>>>>", eventos);
    setFiltrados(eventos);
  }, []);

  function buscarPorCategoria(id) {
    return eventos.filter((evento) => evento.idCategoria === id);
  }

  const handleSelect = (e) => {
    const idCatSeleccionada = e.target.value;
    console.log("idCatSeleccionada", idCatSeleccionada);
    if (idCatSeleccionada === "Todas") {
      setFiltrados(eventos);
    } else {
      setFiltrados(buscarPorCategoria(idCatSeleccionada));
    }
  };

  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="inputGroupSelect01">
        Categoría:
      </label>
      <select
        className="form-select"
        id="inputGroupSelect01"
        onChange={handleSelect}
      >
        <option defaultValue="Todas">Todas</option>
        {categorias &&
          categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nombre}
            </option>
          ))}
      </select>
    </div>
  );
}
