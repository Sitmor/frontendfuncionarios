import React from "react";

const Recaudacion: React.FC = () => {
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
                    <button className="btn btn-primary" onClick={volverAlInicio}>
                        Volver al Inicio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Recaudacion;
