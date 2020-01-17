import React from 'react'
import { Body, ImageTeste } from './Teste.style'

const Teste = ({ src }) => (
    <Body >
        <h1>Mingardi</h1>
        <p>Este é Mingardi</p>

        <ImageTeste src={src}/>
    </ Body>
)

export default Teste