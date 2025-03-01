import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function CreateAppointment({ addAppointment }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({ title, description, date });
    navigate('/');
  };

  return (
    <div className='div-form'>
      <h1>Novo Compromisso</h1>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CreateAppointment;
