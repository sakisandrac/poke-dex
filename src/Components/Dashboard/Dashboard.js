import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import RandomPokemon from '../RandomPokemon/RandomPokemon';
import Details from '../Details/Details';

const Dashboard = () => {

  const getRandomNum = () => {
    return Math.floor(Math.random() * 100)
  };
  
  const [randomPokemon, setRandomPokemon] = useState({
    number: "",
    data: {name: "loading"},
    image: "",
    clicks: 0,
    showDetails: false
  });

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const num = getRandomNum();

    fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setRandomPokemon(prev => {
        return {
          ...prev,
          number: num,
          data: data,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`
        }
      })
    })
  }, [randomPokemon.clicks]);

  const updateUsernameInput = (e) => {
    const {value} = e.target;
    setUserName(value);
  };

  return (
    <div className='dashboard-container'>
        <div className='username-container'>
          <label className='username-label' htmlFor='username'>Enter Your Name</label>
          <input className='username-input' type='text' name='username' value={userName} onChange={(e)=> {updateUsernameInput(e)}}></input>
        </div>
        <h1 className='welcome-msg'>{`Welcome, ${userName? userName : 'Pokemon Trainer'}`}!</h1>
      <main className='main-container'>
        <RandomPokemon randomPokemon={randomPokemon}setRandomPokemon={setRandomPokemon}/>
        {randomPokemon.showDetails && <Details randomPokemon={randomPokemon}/>}
      </main>
    </div>
  )
}

export default Dashboard