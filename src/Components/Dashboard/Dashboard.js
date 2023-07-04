import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {

  const getRandomNum = () => {
    return Math.floor(Math.random() * 100)
  }
  
  const [randomPokemon, setRandomPokemon] = useState({
    number: "",
    data: [],
    image: ""
  })

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
  }, [])

  return (
    <div className='dashboard-container'>
      <h1 className='welcome-msg'>Welcome, Pokemon Trainer!</h1>
      <main>
        <div className='random-container'>
          <section className='random-pokemon'>
            <img src={randomPokemon.image} />
          </section>
        </div>
      </main>
    </div>
  )
}

export default Dashboard