import React from 'react';
import './RandomPokemon.css'

const RandomPokemon = ({randomPokemon, setRandomPokemon}) => {

  const capitalizeName = (name) => {
    return `${name.split('')[0].toUpperCase()}${name.substring(1)}`
  }

  const getNewRandomPokemon = () => {
    setRandomPokemon(prev => {
      return {
        ...prev,
        clicks: prev.clicks + 1
      }
    });
  }

  const showPokemonDetails = () => {
    setRandomPokemon(prev => {
      return {
        ...prev,
        showDetails: !prev.showDetails
      }
    });
  }

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
          {randomPokemon.data.abilities?.map(ability => (<li key={ability.ability.name}>{ability.ability.name}</li>))}
        </div>
        <div className='types-container'>
          <ul className='types-header'>Types:</ul>
          {randomPokemon.data.types?.map(type => (<li key={type.type.name}>{type.type.name}</li>))}
        </div>
      </section>
      <div className='button-container'>
        <button className='btn' onClick={showPokemonDetails}>{randomPokemon.showDetails? 'Hide' : 'Show'} More Details</button>
        <button className='btn' onClick={getNewRandomPokemon}>Get Random Pokemon</button>
        <button className='btn'>Save Pokemon</button>
      </div>
    </div>
  )
}

export default RandomPokemon