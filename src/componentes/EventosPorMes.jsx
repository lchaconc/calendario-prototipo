export default function EventosPorMes({eventos}) {



    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Eventos del mes</h2>
                </div>
            </div>
            {
                eventos.map(evento => (
                    <div className="row" key={evento.id} >
                <div className="col-12 alert alert-success" >
                    {evento.rango}
                      <strong> {evento.titulo } </strong>
                </div>
            </div>
                ))
            }
        </div>
    )
    
};
