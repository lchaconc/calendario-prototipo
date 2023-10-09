import React, { useState, useEffect, useRef } from "react";



export default function EventosPorDia({ categorias, eventosDelDia }) {  
  const [filtrados, setFiltrados] = useState(null);
  const categoriasRef = useRef(null);

  

  useEffect(() => {
    filtrarEventos();
  }, [eventosDelDia]);

  function buscarPorCategoria(id) {
    return eventosDelDia.filter((evento) => evento.idCategoria === id);
  }

  const filtrarEventos = () => {
    if (eventosDelDia) {
      const idCatSeleccionada = categoriasRef.current.value;
      if (idCatSeleccionada === "Todas") {
        setFiltrados(eventosDelDia);
      } else {
        setFiltrados(buscarPorCategoria(idCatSeleccionada));
      }
    }
  };




  return (
    <>      
      <div className="row">
        <div className="col-6">
        <h2>Eventos por día</h2> 
        </div>
        <div className="col-6">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Categoría:
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              ref={categoriasRef}
              onChange={filtrarEventos}
            >
              <option defaultValue="">Todas</option>
              {categorias &&
                categorias.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {" "}
                    {cat.nombre}{" "}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>

      <div className="row">
      {filtrados &&
        filtrados.map((evento) => (
          <h1> {evento.titulo} </h1>
        ))}
      </div>


     


    </>
  );
}
