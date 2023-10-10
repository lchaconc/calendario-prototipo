import { useState } from "react";
import DetalleEventos from "./DetalleEventos";
import Buscador from "./Buscador";
import BuscadorGeneral from "./BuscadorGeneral";


export default function EventosPorMes({ eventos, categorias }) {
  const [filtrados, setFiltrados] = useState(eventos);




  return (
    <div className="container">
      <BuscadorGeneral eventos={eventos} categorias={categorias} setFiltrados={setFiltrados} />

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
