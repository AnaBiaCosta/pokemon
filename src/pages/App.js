import React, { useEffect, useState } from 'react';
import Card from '../components/Card'
import Teste from '../components/Teste'

const App = () => {
  const [text, setText] = useState('texto')

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res)
      })
  }, [text])
  return (
    <>
      <Card
        batata={Math.random() > 0.5}
        text={text}
      />

      <button onClick={() => setText('textao')}>SOCORRO</button>

      <Teste
        name='Mingadi'
        description='Este é Minguardi'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZCW_Vq1R49qNAlfMryR16VYUJ8lpQvyLKG6ujYeW5BnxAKUz&s' />
    </>
  )
}

export default App;
