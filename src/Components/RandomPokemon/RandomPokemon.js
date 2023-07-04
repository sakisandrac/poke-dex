import React from 'react';
import './RandomPokemon.css'

const RandomPokemon = ({randomPokemon}) => {

  const capitalizeName = (name) => {
    return `${name.split('')[0].toUpperCase()}${name.substring(1)}`
  }
console.log(randomPokemon.data.abilities)
  return (
    <div className='random-pokemon-container'>
      <h2 className='random-pokemon-header'>Discover Random Pokemon:</h2>
      <div className='img-container'>
        <section className='img-pokemon'>
          <img className='pokemon-img' src={randomPokemon.image} />
        </section>
      </div>
      <section className='data-container'>
        <p className='pokemon-name'>{capitalizeName(randomPokemon.data?.name)}</p>
        <div className='abilities-container'>
          <ul className='abilities-header'>Abilities:</ul>
          {randomPokemon.data.abilities?.map(ability => (<li>{ability.ability.name}</li>))}
        </div>
        <div className='types-container'>
          <ul className='types-header'>Types:</ul>
          {randomPokemon.data.types?.map(type => (<li>{type.type.name}</li>))}
        </div>
      </section>
      <div className='button-container'>
        <button className='btn'>Get Random Pokemon</button>
        <button className='btn'>Save Pokemon</button>
      </div>
    </div>
  )
}

export default RandomPokemon