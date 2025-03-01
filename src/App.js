import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UpcomingAppointments from './UpcomingAppointments/UpcomingAppointments';
import CreateAppointment from './CreateAppointment/CreateAppointment';
import EditAppointment from './EditAppointment/EditAppointment';
import './App.css';

function App() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    appointment.id = Date.now();
    setAppointments([...appointments, appointment]);
  };

  const updateAppointment = (id, updatedAppointment) => {
    setAppointments(
      appointments.map(app =>
        app.id === id ? { ...app, ...updatedAppointment } : app
      )
    );
  };

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter(app => app.id !== id));
  };

  return (
    <div className='main'>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <UpcomingAppointments 
                appointments={appointments} 
                deleteAppointment={deleteAppointment}
              />
            } 
          />
          <Route 
            path="/novo" 
            element={
              <CreateAppointment 
                addAppointment={addAppointment} 
              />
            } 
          />
          <Route
            path="/edit/:id"
            element={
              <EditAppointment
                appointments={appointments}
                updateAppointment={updateAppointment}
              />
            }
          />
        </Routes>     
        <div className='nav-links'>
              <Link className='link' to="/">Próximos Compromissos</Link>
              <Link className='link' to="/novo">Novo Compromisso</Link>
        </div>
      </Router>
    </div>
  );
}

export default App;
