const getData = (num) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      return data
    })
}

export { getData }