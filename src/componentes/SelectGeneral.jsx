import  { useState, useEffect } from 'react';


export default function SelectGeneral({categorias, eventos, setFiltrados }) {
    const [subcategorias, setSubcategorias] = useState(null);


    const handleSelectCategoria =(e)=> {
        const idCategoria = e.target.value;        
        console.log("idCategoria",idCategoria);
        if (idCategoria != "Todas" ) {
        const tmpItem = categorias.filter( categoria => categoria.id === idCategoria  );
        console.log(tmpItem[0].subcategorias ); 
        setSubcategorias(tmpItem[0].subcategorias);              
        } else {
        setSubcategorias(null);
        setFiltrados(eventos)
        }
        
    }

    const buscarPorEtiqueta = (evento, etiquetaBuscada) => {
        return evento.etiquetas.includes(etiquetaBuscada);
      }

    const handleSelectSubcategorias =(e)=> {
        const idSub = e.target.value;
        console.log(idSub);
        const tmpFiltrados = eventos.filter((evento) => buscarPorEtiqueta(evento, idSub));
        setFiltrados(tmpFiltrados)
        
    }

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
            onChange={handleSelectCategoria}
          >
            <option defaultValue="0">Todas</option>
            {categorias &&
              categorias.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.nombre}
                </option>
              ))}
          </select>
        </div>
      </div>

      {
        subcategorias &&
        <div className="col-6">
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Subcategoría:
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            onChange={handleSelectSubcategorias}
          >
            <option defaultValue="0"  >Seleccione:</option>
            {subcategorias.map(sub => (
                <option key={sub.id} value={sub.id}>
                  {sub.etiqueta}
                </option>
              ))}
          </select>
        </div>
      </div>
      }

    </div>
  );
}
