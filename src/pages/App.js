import React from 'react';
import Card from '../components/Card'
import Teste from '../components/Teste'

const App = () => (
  <>
  <Card
    batata={Math.random() > 0.5}
    text='Bom dia Mingardi'
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYXuCsAPfe-LcVuUiNGFlEx7JDeP_T6Ycb8iqIreurYuhQ8HM_'
  />

  <Teste 
    name='MinCard'
    description='Este é Minguardi'
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZCW_Vq1R49qNAlfMryR16VYUJ8lpQvyLKG6ujYeW5BnxAKUz&s'
  />
  
  </>
)

export default App;
