//id de categoria seleccionada por el usuario  en el select
let idCategoria="";
//cadena de texto escrita por el usuario en input buscador
let palabra="";


export default function BuscadorGeneral({ eventos, categorias, setFiltrados }) {
  const handleObtenerPalabra = (e) => {
    palabra = e.target.value;    
    //setFiltrados(buscarPalabraClave(palabra));
    filtrar()
  };

  //quita tildes, carcateres especiales y la convierte a minúscula
  const normalizar = (palabra) => {
    return palabra
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const buscarPalabraClave = (palabra) => {
    palabra = normalizar(palabra);
    const resultados = [];

    for (const evento of eventos) {
      const tituloNormalizado = normalizar(evento.titulo);
      if (tituloNormalizado.includes(palabra)) {
        resultados.push(evento);
      }
    }

    return resultados;
  };

  function buscarPorCategoria(id) {
    return eventos.filter((evento) => evento.idCategoria === id);
  }

  const handleSelect = (e) => {
    idCategoria = e.target.value;
    console.log("idCategoria", idCategoria);
    filtrar()
    /*
    if (idCategoria === "Todas") {
      setFiltrados(eventos);
    } else {
      setFiltrados(buscarPorCategoria(idCatSeleccionada));
    }
    */
  };


  const filtrar = () => {  
    if (eventos && idCategoria !== "") {  
      let tmpFiltrados = eventos.filter(
        (item) =>
          item.titulo && item.titulo === palabra &&
          (idCategoria === "Todas" || item.idCategoria === idCategoria)
      );
      setFiltrados(tmpFiltrados);
    }
    

    if (eventos && palabra === "") {
      let tmpFiltrados = eventos.filter(
        (item) => idCategoria === "Todas" || item.idCategoria === idCategoria
      );
      setFiltrados(tmpFiltrados);
    }
  };

  return (
    <div className="row">
      <div className="col-6">
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
      </div>

      <div className="col-6">
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Buscar
          </span>
          <input
            type="text"
            onChange={handleObtenerPalabra}
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
    </div>
  );
}
