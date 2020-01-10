import React from 'react';
import Card from '../components/Card'

const App = () => (
  <Card
    batata={Math.random() > 0.5}
    text='Bom dia Mingardi'
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYXuCsAPfe-LcVuUiNGFlEx7JDeP_T6Ycb8iqIreurYuhQ8HM_'
  />
)

export default App;
