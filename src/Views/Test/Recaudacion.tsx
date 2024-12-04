import React from "react";
import { useNavigate } from "react-router-dom";

const Recaudacion: React.FC = () => {

    const navigate = useNavigate();

    const recaudaciones = [
        { id: 1, medico: "Dr. Pérez", total: 1200 },
        { id: 2, medico: "Dr. López", total: 950 },
    ];

    const generarComprobante = (medico: string) => {
        alert(`Comprobante generado para ${medico}`);
    };

    const volverAlInicio = () => {
        alert("Volviendo al inicio...");
    };

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
                <h1 className="text-center">Recaudación</h1>
                <p className="text-center">Registre pagos y genere comprobantes para los médicos.</p>
                <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Médico</th>
                            <th>Total Recaudado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recaudaciones.map((rec) => (
                            <tr key={rec.id}>
                                <td>{rec.medico}</td>
                                <td>${rec.total.toLocaleString()}</td>
                                <td>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => generarComprobante(rec.medico)}
                                    >
                                        Generar Comprobante
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="text-center mt-4">
                    <button className="btn btn-primary" onClick={() => {navigate("/homepage")}}>
                        Volver al Inicio
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Recaudacion;
