import React, { useState, useEffect, useRef } from "react";

import ReactCalendar from "./componentes/ReactCalendar";
import eventos from "./data/events.json";
import categorias from "./data/categorias.json";
import EventosPorDia from "./componentes/EventosPorDia";
import MenuVistas from "./componentes/MenuVistas";
import EventosPorMes from "./componentes/EventosPorMes";

function App() {
  const [eventosDelDia, setEventosDelDia] = useState([]);
  const [selectedView, setSelectedView] = useState("dia");

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
            <EventosPorMes
              eventos={eventos}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
