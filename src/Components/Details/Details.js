import React from 'react';
import './Details.css';

const Details = ({randomPokemon}) => {
  return (
    <div className='details-container'>
      <h2>More Details</h2>
      <section className='data-container'>
        <p>Base Experience: {randomPokemon.data.base_experience}</p>
        <p>Weight: {randomPokemon.data.weight} kg</p>
        <div className='moves-container'>
          <ul className='abilities-header'>Moves:</ul>
          {randomPokemon.data.moves?.map(move => (<li key={move.move.name}>{move.move.name}</li>))}
        </div>
        
        <div className='types-container'>
          {/* <ul className='types-header'>Types:</ul>
          {randomPokemon.data.types?.map(type => (<li>{type.type.name}</li>))} */}
        </div>
      </section>
    </div>
  )
}

export default Details