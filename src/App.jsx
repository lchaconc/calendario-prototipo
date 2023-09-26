import React, { useState, useEffect, useRef } from "react";

import ReactCalendar from "./componentes/ReactCalendar";
import eventos from "./data/events.json";
import categorias from "./data/categorias.json";
import EventosPorDia from "./componentes/EventosPorDia";


function App() {
  const [eventosDelDia, setEventosDelDia] = useState([]);  
  

 
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <ReactCalendar
            eventos={eventos}
            setEventosDelDia={setEventosDelDia}
          />
        </div>
        <div className="col-8">
          <EventosPorDia categorias={categorias} eventosDelDia={eventosDelDia}/>
        </div>
      </div>
    </div>
  );
}

export default App;
