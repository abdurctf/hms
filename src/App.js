import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppointmentsPage from './components/AppointmentsPage';
import HospitalInfo from './components/HospitalInfo';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={AppointmentsPage} />
            <Route path="/hospital-info" component={HospitalInfo} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}
