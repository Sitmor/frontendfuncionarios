import React from "react";
import { useNavigate } from "react-router-dom";

const Informes: React.FC = () => {
    
    const navigate = useNavigate();

    return (
        <>
            <div lang="en">
 
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
   Generar Informes
  </title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"/>
 
 <div>
  <div className="container mt-5">
   <h1 className="text-center">
    Generar Informes
   </h1>
   <p className="text-center">
    Consulte informes de recaudación por rango de fechas.
   </p>
   <div className="mt-4">
    <form className="mt-4">
     <div className="mb-3">
      <label className="form-label" htmlFor="startDate">
       Fecha Inicio
      </label>
      <input className="form-control" id="startDate" type="date"/>
     </div>
     <div className="mb-3">
      <label className="form-label" htmlFor="endDate">
       Fecha Fin
      </label>
      <input className="form-control" id="endDate" type="date"/>
     </div>
     <button className="btn btn-warning" type="submit">
      Generar Informe
     </button>
    </form>
   </div>
   <div className="text-center mt-5">
    <button className="btn btn-primary" onClick={() => {navigate("/homepage")}}>
     Volver al Inicio
    </button>
   </div>
  </div>
 </div>
</div>
        </>
    );
};

export default Informes;
