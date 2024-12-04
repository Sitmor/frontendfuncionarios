import React, { useState } from "react";

const Loginfun: React.FC = () => {
    const [contrasena, setContrasena] = useState<string>("");
    const [rut, setRut] = useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f4f4f4" }}>
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", width: "300px" }}>
                <h1 style={{ textAlign: "center", color: "#333" }}>Login</h1>
                <form id="loginForm" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <label htmlFor="rut" style={{ fontSize: "14px", fontWeight: "bold", color: "#555" }}>Rut</label>
                    <input
                        id="rut"
                        type="text"
                        value={rut}
                        onChange={(e) => setRut(e.target.value)}
                        style={{ padding: "10px", fontSize: "14px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                    <label htmlFor="contrasena" style={{ fontSize: "14px", fontWeight: "bold", color: "#555" }}>Clave</label>
                    <input
                        id="contrasena"
                        type="text"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        style={{ padding: "10px", fontSize: "14px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                    <button type="submit" style={{ padding: "10px", fontSize: "16px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Loginfun;
