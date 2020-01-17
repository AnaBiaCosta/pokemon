import React, { useEffect, useState } from 'react';
import Teste from '../components/Card'

const App = () => {
  const [pokemon, setPokemon] = useState({
    nome: null,
    image: null,
  })

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res)
        setPokemon({
          nome: res.name,
          image: res.sprites.front_default
        })
      })
  }, [])

  return (
      <Teste
        name={pokemon.nome}
        description='Este é Minguardi'
        src={pokemon.image} 
      />
  )
}

export default App;
