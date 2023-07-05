import React from 'react';
import './SavedPokemon.css';

const SavedPokemon = ({savedPokemon}) => {
console.log(savedPokemon)

  return (
    <div className='saved-container'>
      {savedPokemon.map(pokemon => {
        return (
        <article className='saved-pokemon'>
          <div className='saved-pokemon-header'>
            <p className='pokemon-num'>{`No. ${pokemon.number}`}</p>
          </div>
          <img key={pokemon.name} src={pokemon.image} />
        </article>
        )})}
    </div>
  )
}

export default SavedPokemon