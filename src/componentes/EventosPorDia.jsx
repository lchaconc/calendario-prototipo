import React, { useState, useEffect, useRef } from "react";

const cuentaInstagram = "logan24";

export default function EventosPorDia({ categorias, eventosDelDia }) {
  const [itemStates, setItemStates] = useState({});
  const [filtrados, setFiltrados] = useState(null);

  const categoriasRef = useRef(null);

  const toggleCaption = (itemId) => {
    setItemStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

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

const quitartildes =(str)=> {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

  const createGoogleCalendarLink = (evento) => {
    const base = "https://www.google.com/calendar/render?action=TEMPLATE";
    const text = `&text=${encodeURIComponent(evento.titulo)}`;
    // Suponiendo que tu fecha de inicio y fin están en formato YYYYMMDD
    const dates = `&dates=${evento.fecha.replace(
      /-/g,
      ""
    )}/${evento.fecha.replace(/-/g, "")}`;
    const details = `&details=${encodeURIComponent(evento.descripcion)}`;
    // Si no tienes una ubicación, simplemente omite la parte de location
    // const location = `&location=${encodeURIComponent(evento.ubicacion)}`;
    return `${base}${text}${dates}${details}`;
  };

  const createOutlookCalendarLink = (evento) => {
    const base =
      "https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent";
    const subject = `&subject=${encodeURIComponent(evento.titulo)}`;
    // Suponiendo que tu fecha de inicio y fin están en formato YYYY-MM-DDTHH:mm:ss (por ejemplo, "2023-09-25T09:00:00")
    const startdt = `&startdt=${evento.fecha}`;
    const enddt = `&enddt=${evento.fecha}`; // Ajusta si tienes una fecha de finalización diferente
    const body = `&body=${encodeURIComponent(evento.descripcion)}`;
    // Si no tienes una ubicación, simplemente omite la parte de location
    // const location = `&location=${encodeURIComponent(evento.ubicacion)}`;
    return `${base}${startdt}${enddt}${subject}${body}`;
  };

  const createWhatsAppLink = (evento) => {
    const text = `${evento.titulo} - ${evento.descripcion} ${
      evento.link ? "Más info: " + evento.link : ""
    }`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  const createTwitterLink = (evento) => {
    const text = `${evento.titulo} - ${evento.descripcion} ${
      evento.link ? "Más info: " + evento.link : ""
    }`;
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
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
          <div
            role={"button"}
            className="alert alert-info col-12"
            key={evento.id}
            onClick={() => toggleCaption(evento.id)}
          >
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
                <a href={evento.link} target="_blank" rel="noopener noreferrer">
                  {" "}
                  🔗Enlace para detalles{" "}
                </a>
                <br />
                <a
                  href={createGoogleCalendarLink(evento)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📅 Añadir a Google Calendar
                </a>

                <br />
                <a
                  href={createOutlookCalendarLink(evento)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📅 Añadir a Outlook Calendar
                </a>
                <br />
                <a
                  href={createWhatsAppLink(evento)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Compartir en WhatsApp
                </a>
                <br />
                <a
                  href={createTwitterLink(evento)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Compartir en Twitter (X)
                </a>
                <br />
                <a
                  href={`https://www.instagram.com${cuentaInstagram}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en Instagram
                </a>
              </p>
            )}
          </div>
        ))}
      </div>


     


    </>
  );
}
