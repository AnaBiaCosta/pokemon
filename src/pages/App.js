import React, { useEffect, useState } from 'react';
import Card from '../components/Card'
const App = () => {
  const [pokemons, setPokemons] = useState(null)

  const [description, setDescription] = useState(null)
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        Promise.all(res.results.map(pokeObj => {
          return fetch(pokeObj.url)
            .then((poke) => poke.json())
        })).then((values) => {
          setPokemons(values)
        })
      })
  }, [])
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon-species/ditto')
      .then((res) => res.json())
      .then((res) => {
        setDescription(res && res.flavor_text_entries)
      })
  }, [])
  const findDesc = (arr) => {
    const result = arr && arr.filter(item => item.version.name === 'red')
    return result && result[0].flavor_text
  }
  return (
    <>
    <Card
      // name={pokemons.nome}
      // src={pokemons.image}
      // description={findDesc(description)}
    />
      {console.log(pokemons)}
    </>
  )
}
export default App;