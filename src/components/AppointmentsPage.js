import React, { useState } from 'react';


export default function AppointmentsPage ({  deleteAppointment, updateAppointment })  {
  const [appointmentToEdit, setAppointmentToEdit] = useState(null);
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const handleDelete = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  
  }
  const handleUpdateForm = (appointment) => {
    setAppointmentToEdit(appointment);
    setEditFormVisible(true);
  }

  const handleUpdate = (id, updatedAppointment) => {
    setAppointmentsData(appointmentsData.map(appointment => appointment.id !== id ? appointment : updatedAppointment));
    setEditFormVisible(false);
  }
console.log(appointments)
  const  handleAdd= (e) => {
      e.preventDefault();
      
      setAppointments(prev => [...prev, {
        id: appointments.length + 1,
        date: e.target.elements.date.value,
        time: e.target.elements.time.value,
        description: e.target.elements.description.value
      }]);
      
  }
   
  

  return (
    <div>
      <h1>Appointments</h1>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            {appointment.date} {appointment.time}: {appointment.description}
            <button onClick={() => handleDelete(appointment.id)}>Delete</button>

            <button onClick={() => handleUpdateForm(appointment)}>Update</button>
          </li>
        ))}
      </ul>
      {editFormVisible && (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleUpdate(appointmentToEdit.id, {
              date: e.target.elements.date.value,
              time: e.target.elements.time.value,
              description: e.target.elements.description.value
            });
          }}
        >
          <label htmlFor="date">Date:</label>
          <input type="date" name="date" value={appointmentToEdit.date} />

          <br />
          <label htmlFor="time">Time:</label>

          <input type="time" name="time" value={appointmentToEdit.time} />
          <br />
          <label htmlFor="description">Description:</label>

          <input type="text" name="description" value={appointmentToEdit.description} />
          <br />
          <button type="submit">Update Appointment</button>
        </form>
      )}
      <h2>Add Appointment</h2>
      <form
    onSubmit={handleAdd}
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
  
</div>
);
};

