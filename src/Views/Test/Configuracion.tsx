import React from "react";
import { useNavigate } from "react-router-dom";

const Configuracion: React.FC = () => {
    
    const navigate = useNavigate();

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
            <div lang="en">
 
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
   Configuración
  </title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"/>
 
 <div>
  <div className="container mt-5">
   <h1 className="text-center">
    Configuración
   </h1>
   <p className="text-center">
    Ajuste las preferencias del sistema y la seguridad.
   </p>
   <div className="mt-4">
    <form className="mt-4">
     <div className="mb-3">
      <label className="form-label" htmlFor="email">
       Correo del Administrador
      </label>
      <input className="form-control" id="email" placeholder="admin@centromedico.com" type="email"/>
     </div>
     <div className="mb-3">
      <label className="form-label" htmlFor="password">
       Contraseña
      </label>
      <input className="form-control" id="password" type="password"/>
     </div>
     <div className="mb-3">
      <label className="form-label" htmlFor="theme">
       Tema de Color
      </label>
      <select className="form-select" id="theme">
       <option defaultValue="light">
        Claro
       </option>
       <option defaultValue="dark">
        Oscuro
       </option>
      </select>
     </div>
     <button className="btn btn-info" type="submit">
      Guardar Configuración
     </button>
    </form>
   </div>
   <div className="text-center mt-5">
    <a className="btn btn-primary" onClick={() => {navigate("/homepage")}}>
     Volver al Inicio
    </a>
   </div>
  </div>
 </div>
</div>
        </>
    );
};

export default Configuracion;
