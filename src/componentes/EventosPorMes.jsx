import { useState, useEffect } from "react";

export default function EventosPorMes({ eventos }) {
  const [eventosFiltrados, setEventosFiltrados] = useState(null);

  useEffect(() => {
    setup();
  }, []);

  const setup = () => {
    setEventosFiltrados(eventos);
  };

  const handleObtenerPalabra = (e) => {
    const palabra = e.target.value;    
    setEventosFiltrados(buscarEnTituloSinTildes(palabra) );
  };

  
  const buscarEnTitulo = (palabra) => {    
    return eventos.filter((item) =>
      item.titulo.toLowerCase().includes(palabra.toLowerCase() )
    );
  };

  //quita tildes, carcateres especiales y la convierte a minúscula
const normalizar=(palabra)=> {
  return palabra.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

}
  

const buscarEnTituloSinTildes = (palabra) => {
  palabra = normalizar(palabra)
  const resultados = [];

  for (const evento of eventos) {
    const tituloNormalizado = normalizar (evento.titulo)
    if (tituloNormalizado.includes(palabra)) {
      resultados.push(evento);
    }
  }

  return resultados;
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
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

      <div className="row">
        <div className="col-12">
          <h2>Eventos del mes</h2>
        </div>
      </div>
      {eventosFiltrados &&
      eventosFiltrados.map((evento) => (
        <div className="row" key={evento.id}>
          <div className="col-12 alert alert-success">
            {evento.rango}
            <strong> {evento.titulo} </strong>
          </div>
        </div>
      ))}
    </div>
  );
}
