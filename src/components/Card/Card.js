import React from 'react'
import { Body, Image } from './Card.style'

const Card = ({ src, name, description }) => (
    <Body >
        <h1>{name}</h1>
        <p>{description}</p>
        <Image src={src}/>
    </ Body>
)

export default Card