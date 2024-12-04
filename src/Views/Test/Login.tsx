import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

const Loginfun: React.FC = () => {
  const [formData, setFormData] = useState({rut: "", contrasena:""});

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  function HandleSubmit(event: any){
    event.preventDefault();

    const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
    connectToDevTools: true,
    });

    client
      .query({
        query: gql`
          query QUERY {
            login {
              rut
              contrasena
            }
          }
        `,
      })
      .then((result) => console.log(result));
  };
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f4f4f4" }}>
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", width: "300px" }}>
                <h1 style={{ textAlign: "center", color: "#333" }}>Login</h1>
                <form id="loginForm" onSubmit={HandleSubmit}>
          {/* Campo de Rut */}
          <label htmlFor="Rut">RUT</label>
          <br />
          <small>Formato: 12.345.678-9</small>
          <input
            type="text"
            className="form-control"
            id="Rut"
            placeholder=""
          />
          {/* Campo de Contraseña */}
          <label htmlFor="Rut">Contraseña</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="Contraseña"
            placeholder=""
          />
          {/* Botón de Iniciar Sesión */}
          <button type="submit" className="btn btn-primary my-3">
            Iniciar Sesión
          </button>
        </form>
            </div>
        </div>
    );
};

export default Loginfun;
