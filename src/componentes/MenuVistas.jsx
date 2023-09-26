export default function MenuVistas({ selectedView, setSelectedView }) {
  const handleRadioChange = (e) => {
    setSelectedView(e.target.value);
  };

  return (
    <div className="row bg-warning pt-1 pb-1 mb-2">
      <div className="col-2">Vistas:</div>
      <div className="col-10">
        <div className="form-check form-check-inline">
          <input
            onChange={handleRadioChange}
            className="form-check-input"
            type="radio"
            name="vistas"
            id="inlineRadio1"
            value="dia"
            checked={selectedView === "dia"} // Establece como predeterminado
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Dia
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={handleRadioChange}
            className="form-check-input"
            type="radio"
            name="vistas"
            id="inlineRadio2"
            value="mes"
            checked={selectedView === "mes"}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Mes
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={handleRadioChange}
            className="form-check-input"
            type="radio"
            name="vistas"
            id="inlineRadio3"
            value="todo"
            checked={selectedView === "todo"}
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            Todo el año
          </label>
        </div>
      </div>
    </div>
  );
}
