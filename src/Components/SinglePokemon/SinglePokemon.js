import React, { useEffect, useState } from 'react';
import './SinglePokemon.css';
import { useParams } from 'react-router-dom';
import { getSinglePokemon } from '../../apiCalls';
import { capitalizeName } from '../../utils';

const SinglePokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({})
  
  useEffect(() => {
    getSinglePokemon(id).then(data => {
      console.log('in single', data)
      setPokemon(data)
    })
  }, [])

  return (
    <div className='single-pokemon-container'>
      <div className='img-container'>
        <section className='img-pokemon'>
          <img className='pokemon-img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
        </section>
      </div>
      <section className='data-container'>
        {pokemon.name && <p className='pokemon-name'>{capitalizeName(pokemon.name)}</p>}
        <div className='abilities-container'>
          <ul className='abilities-header'>Abilities:</ul>
          {pokemon.abilities?.map(ability => (<li key={ability.ability.name}>{ability.ability.name}</li>))}
        </div>
        <div className='types-container'>
          <ul className='types-header'>Types:</ul>
          {pokemon.types?.map(type => (<li key={type.type.name}>{type.type.name}</li>))}
        </div>
      </section>
    </div>
  )
}

export default SinglePokemon