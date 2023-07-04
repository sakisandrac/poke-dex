import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     <Navigation />
     <Dashboard />
    </div>
  );
}

export default App;
