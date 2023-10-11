import { useState, useEffect } from 'react';


export default function EventosRangos({eventos, fechaISO}) {
    console.log("fechaISO", fechaISO);

    const [filtrados, setFiltrados] = useState(null);

    useEffect(() => {
        setup();
    }, []);

    const setup =()=> {
        setFiltrados( obtenerEventosEnRango(eventos) )
    }

    function obtenerEventosEnRango(eventos) {
        //const fechaActual = new Date(); // Obten la fecha actual
        const fechaActual = fechaISO;

        const eventosEnRango = [];
      
        eventos.forEach((evento) => {
          const fechaInicio = new Date(evento.fechaInicio);
          const fechaFin = new Date(evento.fechaFin);
      
          if (fechaActual >= fechaInicio && fechaActual <= fechaFin) {
            eventosEnRango.push(evento);
          }
        });      
        return eventosEnRango;
      }
      
       
      
      

    return (

        <div className="row">
            <div className="col-12">
                <ul>
                    {filtrados && filtrados.map (item => (
                        <li key={item.id} > {item.titulo} </li>
                    )) }
                </ul>
            </div>
        </div>
    )
    
};
