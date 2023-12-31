import { useState, useEffect } from "react";
import DetalleEventos from "./DetalleEventos";
import SelectCategorias from "./SelectCategorias";

export default function EventosPorDia({ categorias, eventos }) {  
  const [filtrados, setFiltrados] = useState(eventos);

  useEffect(() => {
    eventos && setFiltrados(eventos)    
  }, [eventos]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2>Eventos por día</h2>
        </div>   
      </div>
      <div className="row">        
        <div className="col-6">
          <SelectCategorias
            eventos={eventos}
            categorias={categorias}
            setFiltrados={setFiltrados}
          />        
        </div>     
      </div>


      <div className="row">
        {filtrados &&
          filtrados.map((evento) => (
            <DetalleEventos evento={evento} className="alert-info" />
          ))}
      </div>
    </>
  );
}
