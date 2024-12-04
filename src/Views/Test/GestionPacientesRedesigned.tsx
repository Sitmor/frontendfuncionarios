
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GestionPacientes: React.FC = () => {
    const navigate = useNavigate();
    
    const [pacientes, setPacientes] = useState<Array<{ nombre: string; fecha: string }>>([
        { nombre: "Ana López", fecha: "2023-12-03" },
        { nombre: "Carlos Pérez", fecha: "2023-12-05" },
    ]);

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
                <h1 className="text-center">Lista de Pacientes</h1>
                <p className="text-center">Administre los pacientes programados</p>
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
                            <h5 className="text-center">Pacientes Programados</h5>
                            <ul className="list-group">
                                {pacientes.length > 0 ? (
                                    pacientes.map((paciente, index) => (
                                        <li key={index} className="list-group-item">
                                            {paciente.nombre} - {paciente.fecha}
                                        </li>
                                    ))
                                ) : (
                                    <p className="text-center">No hay pacientes programados</p>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default GestionPacientes;
