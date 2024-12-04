
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GestionAgenda: React.FC = () => {
    const navigate = useNavigate();

    const [medicos] = useState(["Dr. Pérez", "Dr. López"]);
    const [medicoSeleccionado, setMedicoSeleccionado] = useState("");
    const [horaInicio, setHoraInicio] = useState("");
    const [horaFin, setHoraFin] = useState("");
    const [disponibilidades, setDisponibilidades] = useState<
        Array<{ medico: string; horaInicio: string; horaFin: string }>
    >([]);

    const agregarDisponibilidad = () => {
        if (!medicoSeleccionado || !horaInicio || !horaFin) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        setDisponibilidades([
            ...disponibilidades,
            { medico: medicoSeleccionado, horaInicio, horaFin },
        ]);
        setMedicoSeleccionado("");
        setHoraInicio("");
        setHoraFin("");
    };

    const eliminarDisponibilidad = (index: number) => {
        setDisponibilidades(disponibilidades.filter((_, i) => i !== index));
    };

    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    const firstWeekday = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();
    const calendar = Array.from({ length: 6 }, (_, weekIndex) =>
        Array.from({ length: 7 }, (_, dayIndex) => {
            const day = weekIndex * 7 + dayIndex - (firstWeekday - 1);
            return day > 0 && day <= daysInMonth ? day : null;
        })
    );

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
   <div className="container-fluid">
    <button className="navbar-brand" onClick={() => {navigate("/homepage")}}>
     Centro Médico Galenos
    </button>
    <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarNav" data-bs-toggle="collapse" type="button">
     <span className="navbar-toggler-icon">
     </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
     <ul className="navbar-nav ms-auto">
      <li className="nav-item">
       <button className="nav-link active" onClick={() => {navigate("/homepage")}}>
        Inicio
       </button>
      </li>
      <li className="nav-item">
       <button className="nav-link" onClick={() => {navigate("/gestionagenda")}}>
        Agenda Médica
       </button>
      </li>
      <li className="nav-item">
       <button className="nav-link" onClick={() => {navigate("/rec")}}>
        Recaudación
       </button>
      </li>
      <li className="nav-item">
       <button className="nav-link" onClick={() => {navigate("/login")}}>
        Salir
       </button>
      </li>
     </ul>
    </div>
   </div>
  </nav>


        <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "20px" }}>
            <div className="container mt-5">
                <h1 className="text-center">Gestión de Agenda</h1>
                <p className="text-center">Administre los horarios y citas médicas</p>
                <div className="row mt-4">
                    <div className="col-md-7">
                        <h5>Calendario</h5>
                        <table className="table table-bordered text-center">
                            <thead>
                                <tr>
                                    <th>Lun</th>
                                    <th>Mar</th>
                                    <th>Mié</th>
                                    <th>Jue</th>
                                    <th>Vie</th>
                                    <th>Sáb</th>
                                    <th>Dom</th>
                                </tr>
                            </thead>
                            <tbody>
                                {calendar.map((week, weekIndex) => (
                                    <tr key={weekIndex}>
                                        {week.map((day, dayIndex) => (
                                            <td key={dayIndex}>{day || ""}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-5">
                        <div
                            style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "8px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                padding: "20px",
                            }}
                        >
                            <h5 className="text-center">Gestión de Disponibilidad</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="medico" className="form-label">
                                        Seleccione el Médico
                                    </label>
                                    <select
                                        id="medico"
                                        className="form-select"
                                        value={medicoSeleccionado}
                                        onChange={(e) => setMedicoSeleccionado(e.target.value)}
                                    >
                                        <option value="">Elija un médico</option>
                                        {medicos.map((medico, index) => (
                                            <option key={index} value={medico}>
                                                {medico}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="horaInicio" className="form-label">
                                        Hora de Inicio
                                    </label>
                                    <input
                                        id="horaInicio"
                                        type="time"
                                        className="form-control"
                                        value={horaInicio}
                                        onChange={(e) => setHoraInicio(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="horaFin" className="form-label">
                                        Hora de Fin
                                    </label>
                                    <input
                                        id="horaFin"
                                        type="time"
                                        className="form-control"
                                        value={horaFin}
                                        onChange={(e) => setHoraFin(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={agregarDisponibilidad}
                                    >
                                        Agregar Disponibilidad
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => setDisponibilidades([])}
                                    >
                                        Eliminar Disponibilidad
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default GestionAgenda;
