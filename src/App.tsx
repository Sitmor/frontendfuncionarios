import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './Views/Test/Index'
import Login from './Views/Test/Login'
import Configuraciones from './Views/Test/Configuracion'
import GestionAgenda from './Views/Test/GestionAgendaCalendarFixed'
import GestionPacientes from './Views/Test/GestionPacientesRedesigned'
import Informes from './Views/Test/Informes'
import Recaudacion from './Views/Test/Recaudacion'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={Login} />
        <Route path="/home" Component={Login} />
        <Route path="/homepage" Component={HomePage} />
        <Route path="/configuracion" Component={Configuraciones} />
        <Route path="/gestionagenda" Component={GestionAgenda} />
        <Route path="/gestionpacientes" Component={GestionPacientes} />
        <Route path="/informes" Component={Informes} />
        <Route path="/rec" Component={Recaudacion} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
