import React from 'react'
import { Title, Wrapper, Image, TitleRosa } from './Card.style'

const Card = ({ text, src, batata }) => (
  <Wrapper>
    <Title bold={batata}>{text}</Title>
    <TitleRosa bold={batata}>{text}</TitleRosa>
    <Image src={src} />
  </Wrapper>
)

export default Card