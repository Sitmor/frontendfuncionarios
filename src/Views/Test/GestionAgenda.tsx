import React, { useRef, useState } from "react";

const GestionAgenda: React.FC = () => {
    const [medico, setMedico] = useState<string>("");
    const [horaInicio, setHoraInicio] = useState<string>("");
    const [horaFin, setHoraFin] = useState<string>("");
    const [disponibilidades, setDisponibilidades] = useState<
        Array<{ medico: string; horaInicio: string; horaFin: string }>
    >([]);

    const agregarDisponibilidad = () => {
        if (!medico || !horaInicio || !horaFin) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        setDisponibilidades([...disponibilidades, { medico, horaInicio, horaFin }]);
        setMedico("");
        setHoraInicio("");
        setHoraFin("");
    };

    const eliminarDisponibilidad = (index: number) => {
        setDisponibilidades(disponibilidades.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Gestión de Agenda</h1>
            <form>
                <label htmlFor="medico">Médico</label>
                <input
                    id="medico"
                    type="text"
                    value={medico}
                    onChange={(e) => setMedico(e.target.value)}
                />
                <label htmlFor="horaInicio">Hora de Inicio</label>
                <input
                    id="horaInicio"
                    type="time"
                    value={horaInicio}
                    onChange={(e) => setHoraInicio(e.target.value)}
                />
                <label htmlFor="horaFin">Hora de Fin</label>
                <input
                    id="horaFin"
                    type="time"
                    value={horaFin}
                    onChange={(e) => setHoraFin(e.target.value)}
                />
                <button type="button" onClick={agregarDisponibilidad}>
                    Agregar Disponibilidad
                </button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Médico</th>
                        <th>Hora de Inicio</th>
                        <th>Hora de Fin</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {disponibilidades.map((d, index) => (
                        <tr key={index}>
                            <td>{d.medico}</td>
                            <td>{d.horaInicio}</td>
                            <td>{d.horaFin}</td>
                            <td>
                                <button onClick={() => eliminarDisponibilidad(index)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GestionAgenda;
