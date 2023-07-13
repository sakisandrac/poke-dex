import React, { useEffect, useState } from 'react';
import { getAllPokemon } from '../../apiCalls';
import { capitalizeName } from '../../utils';
import './AllPokemon.css';

const AllPokemon = () => {

  const [allPokemon, setAllPokemon] = useState([]); 
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false)

  useEffect(() => {
    getAllPokemon()
    .then(data => {
      setAllPokemon(data.results)
    })
    .catch(err => {
      console.log("error", err)
      setError(true)
    })
  }, []);

  const searchPokemon = (e) => {
    const {value} = e.target
    setSearch(value)
  }


  const filteredPokemon = () => {
    const searchedName = search.toLowerCase();

    const searchedPokemon = allPokemon.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchedName);
    });

    return searchedPokemon;
  }

    return (
      <div className='all-pokemon-container'>
        <h1 className='all-pokemon-header'>All Pokemon!</h1>
        {error && <p>Error! Please Try Again Later.</p>}
        <div className='search-container'>
          <label className='search-label' htmlFor='search'>Search All Pokemon: </label>
          <input className='search-input' onChange={(e) => { searchPokemon(e) }} type='text' placeholder='search by name' name='search'></input>
        </div>
        <div className='pokemon-container'>
          {filteredPokemon().length > 0 ?
            filteredPokemon().map(pokemon => {
              return (
                <article key={pokemon.name} className='all-pokemon'>
                  <div className='saved-pokemon-header'>
                    <p className='pokemon-num'>{capitalizeName(pokemon.name)}</p>
                  </div>
                  <img alt={`image of pokemon ${pokemon.name}`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${allPokemon.indexOf(pokemon) + 1}.png`} />
                </article>
              )
            })
            : <p className='results-msg'> No Results- Try again!</p>}
        </div>
      </div>
    )
}

export default AllPokemon