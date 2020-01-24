import React, { useEffect, useState } from 'react';
import Card from '../components/Card'

const App = () => {
  const [pokemon, setPokemon] = useState({
    nome: null,
    image: null,
  })

  const [description, setDescription] = useState({
    desc: null
  })

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setPokemon({
          nome: res.name,
          image: res.sprites.front_default
        })
      })
  }, [])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon-species/pikachu')
      .then((res) => {
        return res.json()
      })

      .then((res) => {
        const array = res.flavor_text_entries
        
        const findDesc = array.filter(item => { 
          return item.version.name === 'red'
        })

        const result = findDesc[0].flavor_text

        setDescription({
          desc: result
        })
      })
  }, [])

  return (
    <Card
      name={pokemon.nome}
      src={pokemon.image}
      description={description.desc}
    />
  )
}

export default App;
