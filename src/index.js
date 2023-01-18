import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import './App.css';
import AppointmentsPage from './components/AppointmentsPage';
import appointments from './data';

createRoot(document.getElementById('root')).render(
  <AppointmentsPage appointments={appointments} />
);