import { useState } from "react";
import DetalleEventos from "./DetalleEventos";
import Buscador from "./Buscador";

export default function EventosPorMes({ eventos }) {
  const [filtrados, setFiltrados] = useState(eventos);




  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
        <Buscador eventos={eventos} setFiltrados={setFiltrados} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2>Eventos del mes</h2>
        </div>
      </div>
      {filtrados &&
      filtrados.map((evento) => (
        <DetalleEventos evento={evento} className={"alert-success"} />
      ))}
    </div>
  );
}
