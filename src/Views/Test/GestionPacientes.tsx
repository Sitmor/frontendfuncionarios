import React, { useState } from "react";

const GestionPacientes: React.FC = () => {
    const [pacientes, setPacientes] = useState<
        Array<{ id: number; nombre: string; hora: string; estado: string }>
    >([
        { id: 1, nombre: "Ana López", hora: "09:00", estado: "En espera" },
        { id: 2, nombre: "Carlos Pérez", hora: "09:30", estado: "En espera" },
    ]);

    const cambiarEstado = (id: number, nuevoEstado: string) => {
        setPacientes((prevPacientes) =>
            prevPacientes.map((paciente) =>
                paciente.id === id ? { ...paciente, estado: nuevoEstado } : paciente
            )
        );
    };

    return (
        <div>
            <h1>Gestión de Pacientes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Hora</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map((paciente) => (
                        <tr key={paciente.id}>
                            <td>{paciente.nombre}</td>
                            <td>{paciente.hora}</td>
                            <td>{paciente.estado}</td>
                            <td>
                                {paciente.estado === "En espera" && (
                                    <button onClick={() => cambiarEstado(paciente.id, "Atendido")}>
                                        Atender
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GestionPacientes;
