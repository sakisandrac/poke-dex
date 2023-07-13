const getSinglePokemon = (num) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
    .then(res => {
      if (!res.ok) {
        console.log(res.statusText)
        throw new Error(res.statusText);
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      const newData = cleanUpData(data)
      console.log('new', newData)
      return newData
    })
}

const cleanUpData = (data) => {
  return {
    abilities: data.abilities,
    id: data.id,
    name: data.name,
    types: data.types,
    moves: data.moves,
    weight: data.weight
  }
}

const getAllPokemon = () =>{
  return fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150')
  .then(res => {
    if (!res.ok) {
      console.log(res.statusText)
      throw new Error(res.statusText);
    }
    return res.json()
  })
  .then(data => {
    console.log(data)
    return data
  })
}

export { getSinglePokemon, getAllPokemon }