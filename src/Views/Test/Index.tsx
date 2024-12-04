import React from "react";
import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {
    
    const navigate = useNavigate();

    return (
        <>
            <div lang="es">
 
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
   Dashboard - Funcionarios
  </title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
 
 <div>
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
       <button className="nav-link" onClick={() => {navigate("/reacaudacion")}}>
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
  <header className="bg-light text-center py-5">
   <h1 className="display-4">
    Dashboard de Funcionarios
   </h1>
   <p className="lead">
    Gestione las operaciones del centro médico de forma eficiente.
   </p>
  </header>
  <div className="container my-5">
   <div className="row">
    <div className="col-md-4 mb-4">
     <div className="card shadow-sm">
      <div className="card-body">
       <h5 className="card-title text-primary">
        Gestión de Agenda
       </h5>
       <p className="card-text">
        Cree, modifique y administre las agendas médicas.
       </p>
       <button className="btn btn-primary" onClick={() => {navigate("/gestionagenda")}}>
        Ir a Agenda
       </button>
      </div>
     </div>
    </div>
    <div className="col-md-4 mb-4">
     <div className="card shadow-sm">
      <div className="card-body">
       <h5 className="card-title text-success">
        Recaudación
       </h5>
       <p className="card-text">
        Registre pagos y genere comprobantes para los médicos.
       </p>
       <button className="btn btn-success" onClick={() => {navigate("/reacaudacion")}}>
        Ver Recaudación
       </button>
      </div>
     </div>
    </div>
    <div className="col-md-4 mb-4">
     <div className="card shadow-sm">
      <div className="card-body">
       <h5 className="card-title text-warning">
        Informes
       </h5>
       <p className="card-text">
        Genere informes de recaudación por rango de fechas.
       </p>
       <button className="btn btn-warning" onClick={() => {navigate("/informes")}}>
        Generar Informes
       </button>
      </div>
     </div>
    </div>
   </div>
   <div className="row">
    <div className="col-md-4 mb-4">
     <div className="card shadow-sm">
      <div className="card-body">
       <h5 className="card-title text-danger">
        Gestión de Pacientes
       </h5>
       <p className="card-text">
        Registre y controle las atenciones de los pacientes(Médico).
       </p>
       <button className="btn btn-danger" onClick={() => {navigate("/gestionpacientes")}}>
        Gestionar Pacientes
       </button>
      </div>
     </div>
    </div>
    <div className="col-md-4 mb-4">
     <div className="card shadow-sm">
      <div className="card-body">
       <h5 className="card-title text-info">
        Configuración
       </h5>
       <p className="card-text">
        Ajuste las preferencias del sistema y la seguridad.
       </p>
       <button className="btn btn-info" onClick={() => {navigate("/configuracion")}}>
        Ir a Configuración
       </button>
      </div>
     </div>
    </div>
   </div>
  </div>
  <footer className="bg-primary text-white text-center py-3">
   <p className="mb-0">
    © 2024 Centro Médico Galenos. Todos los derechos reservados.
   </p>
  </footer>
 </div>
</div>
        </>
    );
};

export default Index;
