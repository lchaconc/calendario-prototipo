import { useState, useEffect } from "react";
import DetalleEventos from "./DetalleEventos";
import SelectCategorias from "./SelectCategorias";
import Buscador from "./Buscador";

export default function EventosPorDia({ categorias, eventos }) {
  const [filtradosCat, setFiltradosCat] = useState(eventos);
  const [filtrados, setFiltrados] = useState(eventos);

  useEffect(() => {
    eventos && setFiltradosCat(eventos)
    console.log("eventosaaaaaaa", eventos);

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
            setFiltrados={setFiltradosCat}
          />        
        </div>
        
{
  /*
        <div className="col-6">
          <Buscador 
          eventos={filtrados}
          setFiltrados={setFiltrados}
          />
        </div>
  */
}

      </div>


      <div className="row">
        {filtradosCat &&
          filtradosCat.map((evento) => (
            <DetalleEventos evento={evento} className="alert-info" />
          ))}
      </div>
    </>
  );
}
