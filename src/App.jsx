import React, { useState, useEffect } from "react";

import ReactCalendar from "./componentes/ReactCalendar";
import eventos from "./data/events.json";

function App() {
  const [eventosDelDia, setEventosDelDia] = useState([]);
  const [itemStates, setItemStates] = useState({});

  const toggleCaption = (itemId) => {
    setItemStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

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
          <h1>Eventos del día</h1>
          {eventosDelDia &&
            eventosDelDia.map((evento) => (
              <div 
              role={"button"}
              className="alert alert-info"
              key={evento.id} 
              onClick={() => toggleCaption(evento.id)}>
                <span className="badge text-bg-primary">
                  {evento.nombreCategoria}
                </span>
                <p>
                  <span> {evento.rango} </span>
                  <strong>{evento.titulo}</strong>{" "}
                  <span className="badge text-bg-info"> ... </span>
                </p>
                {itemStates[evento.id] && (
                  <p>
                    <span> {evento.descripcion} </span>
                    <br />
                    <a
                      href={evento.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}🔗Enlace {" "}
                    </a>
                  </p>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
