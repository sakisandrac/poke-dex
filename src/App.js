import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import SavedPokemon from './Components/SavedPokemon/SavedPokemon';
import { useState } from 'react';

function App() {

  const [savedPokemon, setSavedPokemon] = useState([]);

  return (
    <>
      <div className="App">
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Dashboard setSavedPokemon={setSavedPokemon} savedPokemon={savedPokemon}/>}></Route>
        <Route path="/saved" element={<SavedPokemon savedPokemon={savedPokemon}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
