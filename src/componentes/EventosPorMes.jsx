export default function EventosPorMes({ eventos }) {

const handleObtenerPalabra =(e)=> {
        const palabra = e.target.value;
        console.log(buscarEnTitulo(palabra));
}

  const buscarEnTitulo = (palabra) => {
    return eventos.filter((item) =>
      item.titulo.toLowerCase().includes(palabra.toLowerCase())
    );
  };

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
      {eventos.map((evento) => (
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
