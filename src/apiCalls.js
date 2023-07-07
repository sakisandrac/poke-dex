const getData = (num) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
  // return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movie`)
  
    .then(res => {
      if (!res.ok) {
        console.log('in api call', res.statusText)
        throw new Error(res.statusText);
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      return data
    })

}

export { getData }