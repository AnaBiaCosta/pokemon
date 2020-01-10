import styled from 'styled-components'

export const Title = styled.h1`
  background: blue;
  color: white;
  font-weight: ${({ bold }) => bold ? 'bold': 'normal'};
`

export const TitleRosa = styled(Title)`
  color: pink;
`

export const Wrapper = styled.div``

export const Image = styled.img``