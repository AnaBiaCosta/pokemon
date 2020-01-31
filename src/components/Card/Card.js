import React from 'react'
import { Body, Image } from './Card.style'

const Card = ({ src, name, description, setPokemon }) => (
    <Body >
        <h1>{name}</h1>
        <p>{description}</p>
        <Image src={src}/>S
    </ Body>
)

export default Card
