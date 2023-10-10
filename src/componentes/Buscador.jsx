export default function Buscador({eventos, setFiltrados }) {


    const handleObtenerPalabra = (e) => {
        const palabra = e.target.value;    
        setFiltrados(buscarPalabraClave(palabra) );
      };
    
      
    
      //quita tildes, carcateres especiales y la convierte a minúscula
    const normalizar=(palabra)=> {
      return palabra.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    
    }
      
    
    const buscarPalabraClave = (palabra) => {
      palabra = normalizar(palabra)
      const resultados = [];
    
      for (const evento of eventos) {
        const tituloNormalizado = normalizar (evento.titulo)
        if (tituloNormalizado.includes(palabra)) {
          resultados.push(evento);
        }
      }
    
      return resultados;
    }

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="inputGroup-sizing-default">
        Buscar
      </span>
      <input
        type="text"
        onChange={handleObtenerPalabra}
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
  );
}
