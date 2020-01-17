import React from 'react'
import { Body, ImageTeste } from './Teste.style'

const Teste = ({ src, name, description }) => (
    <Body >
        <h1>{name}</h1>
        <p>{description}</p>
        <ImageTeste src={src}/>
    </ Body>
)

export default Teste