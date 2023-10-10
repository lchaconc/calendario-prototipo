import { useState, useEffect } from 'react';
import SelectGeneral from "./SelectGeneral"

export default function EventosPorMesSelect({categorias, eventos}) {
const [filtrados, setFiltrados] = useState(null);

    useEffect(() => {
        setFiltrados(eventos)        
    }, []);




    return (
        <div className="container">
            <SelectGeneral categorias={categorias} eventos={eventos} setFiltrados={setFiltrados} />

<ul>
    {
        filtrados && filtrados.map(item => (
            <li key={item.id} > {item.titulo} </li>
        ) )
    }
</ul>

        </div>
    )
    
};
