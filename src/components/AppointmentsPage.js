import React, { useState } from 'react';

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: '2022-01-01',
      time: '10:00',
      description: 'Doctor appointment'
    },
    {
      id: 2,
      date: '2022-01-15',
      time: '09:00',
      description: 'Dentist appointment'
    }
  ]);

  // function to add a new appointment
  const addAppointment = appointment => {
    setAppointments([...appointments, appointment]);
  };

  // function to update an existing appointment
  const updateAppointment = (id, updatedAppointment) => {
    setAppointments(
      appointments.map(appointment =>
        appointment.id === id ? updatedAppointment : appointment
      )
    );
  };

  // function to delete an appointment
  const deleteAppointment = id => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  return (
    <div>
      <h1>Appointments</h1>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            {appointment.date} {appointment.time}: {appointment.description}
            <button onClick={() => deleteAppointment(appointment.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h2>Add Appointment</h2>
      <form
  onSubmit={e => {
    e.preventDefault();
    addAppointment({
      id: appointments.length + 1,
      date: e.target.elements.date.value,
      time: e.target.elements.time.value,
      description: e.target.elements.description.value
    });
    e.target.reset();
  }}
>
  <label htmlFor="date">Date:</label>
  <input type="date" name="date" />
  <br />
  <label htmlFor="time">Time:</label>
  <input type="time" name="time" />
  <br />
  <label htmlFor="description">Description:</label>
  <input type="text" name="description" />
  <br />
  <button type="submit">Add Appointment</button>
</form>
</div>)}

export default AppointmentsPage;