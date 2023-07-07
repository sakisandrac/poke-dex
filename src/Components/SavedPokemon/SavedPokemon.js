import React from 'react';
import './SavedPokemon.css';

const SavedPokemon = ({savedPokemon}) => {
console.log(savedPokemon)

  return (
    <div className='saved-container'>
      {savedPokemon.map(pokemon => {

        return (
        <article key={pokemon.data.name + "b"} className='saved-pokemon'>
          <div key={pokemon.data.name} className='saved-pokemon-header'>
            <p className='pokemon-num'>{`No. ${pokemon.number}`}</p>
          </div>
          <img key={pokemon.data.name + "a"} src={pokemon.image} />
        </article>
        )})}
    </div>
  )
}

export default SavedPokemon