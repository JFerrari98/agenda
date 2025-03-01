import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../App.css';

moment.locale('pt-br');
const localizer = momentLocalizer(moment);

const messages = {
  date: 'Data',
  time: 'Hora',
  event: 'Evento',
  allDay: 'Dia inteiro',
  week: 'Semana',
  work_week: 'Semana de trabalho',
  day: 'Dia',
  month: 'Mês',
  previous: 'Anterior',
  next: 'Próximo',
  yesterday: 'Ontem',
  tomorrow: 'Amanhã',
  agenda: 'Agenda',
  today: 'Hoje',
  noEventsInRange: 'Não há eventos nesse período.',
  showMore: total => `+${total} mais`
};

function AppointmentCalendar({ appointments }) {
  const events = appointments.map(appointment => ({
    title: appointment.title,
    start: new Date(appointment.date),
    end: new Date(appointment.date),
  }));

  return (
    <div className='calendar'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        messages={messages}
      />
    </div>
  );
}

export default AppointmentCalendar;
