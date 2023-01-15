import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import AppointmentsPage from './components/AppointmentsPage';
import appointments from './data';

ReactDOM.render(
  <AppointmentsPage appointments={appointments} />,
  document.getElementById('root')
);