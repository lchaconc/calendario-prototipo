import React, { useState, useEffect, useRef } from "react";

import ReactCalendar from "./componentes/ReactCalendar";
import eventos from "./data/events.json";
import categorias from "./data/categorias.json";
import EventosPorDia from "./componentes/EventosPorDia";
import MenuVistas from "./componentes/MenuVistas";
import EventosPorMes from "./componentes/EventosPorMes";
import EventosPorMesSelect from "./componentes/EventosPorMesSelect";
import EventosRangos from "./componentes/EventosRangos";

function App() {
  const [eventosDelDia, setEventosDelDia] = useState([]);
  const [selectedView, setSelectedView] = useState("dia");
  const [fechaISO, setFechaISO] = useState(null);

  useEffect(() => {
    console.log("eventosDelDia ******>", eventosDelDia);
  }, [eventosDelDia]);

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-4">
          <ReactCalendar
            eventos={eventos}
            setEventosDelDia={setEventosDelDia}
            setFechaISO={setFechaISO}
          />
        </div>
        <div className="col-8">
          <MenuVistas
            selectedView={selectedView}
            setSelectedView={setSelectedView}
          />
          {selectedView == "dia" && (
            <EventosPorDia
              categorias={categorias}
              eventos={eventosDelDia}
            />
          )}
          {selectedView == "mes" && (
            <EventosPorMesSelect
              categorias={categorias}
              eventos={eventos}
            />
          )}
        </div>
      </div>

      {
        eventos && 
        <EventosRangos eventos={eventos} fechaISO={fechaISO} />
      }


    </div>
  );
}

export default App;
