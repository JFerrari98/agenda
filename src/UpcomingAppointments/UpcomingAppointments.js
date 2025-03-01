import React from 'react';
import { Link } from 'react-router-dom';
import AppointmentCalendar from '../AppointmentCalendar/AppointmentCalendar';
import '../App.css';

function UpcomingAppointments({ appointments, deleteAppointment }) {
  return (
    <div>
      <h1>Próximos Compromissos</h1>
      {appointments.length === 0 ? (
        <p>Nenhum compromisso agendado.</p>
      ) : (
        <>
          <AppointmentCalendar appointments={appointments} />
          <ul>
            {appointments.map(app => (
              <li className='appointment-item' key={app.id}>
                <h2><strong>{app.title}</strong></h2> 
                <p>{app.description}</p> 
                <p>{new Date(app.date).toLocaleString()}</p>
                <div>
                  <Link className='btn-appointment' to={`/edit/${app.id}`}> Editar</Link>
                  <button className='btn-appointment' onClick={() => deleteAppointment(app.id)}>Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default UpcomingAppointments;
