import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditAppointment({ appointments, updateAppointment }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const appointmentToEdit = appointments.find(app => app.id === Number(id));

  const [title, setTitle] = useState(appointmentToEdit ? appointmentToEdit.title : '');
  const [description, setDescription] = useState(appointmentToEdit ? appointmentToEdit.description : '');
  const [date, setDate] = useState(appointmentToEdit ? appointmentToEdit.date : '');

  useEffect(() => {
    if (appointmentToEdit) {
      setTitle(appointmentToEdit.title);
      setDescription(appointmentToEdit.description);
      setDate(appointmentToEdit.date);
    }
  }, [appointmentToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAppointment(Number(id), { title, description, date });
    navigate('/');
  };

  if (!appointmentToEdit) {
    return <p>Compromisso não encontrado.</p>;
  }

  return (
    <div className='div-form'>
      <h1>Editar Compromisso</h1>
      <form className='form-appointment' onSubmit={handleSubmit}>
        <div className='div-item-form'>
          <label>Título:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div className='div-item-form'>
          <label>Descrição:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          ></textarea>
        </div>
        <div className='div-item-form'>
          <label>Data e Hora:</label>
          <input 
            type="datetime-local" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default EditAppointment;
