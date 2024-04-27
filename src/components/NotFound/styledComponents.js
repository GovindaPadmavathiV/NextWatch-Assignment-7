import styled from 'styled-components'

export const NotFoundRouter = styled.div`
  min-height: 90vh;
`
export const NotFoundContainer = styled.div`
  height: 90vh;
  display: flex;
`
export const NotFoundContentContainer = styled.div`
  width: 85%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`

export const NotFoundImage = styled.img`
  height: 300px;
  wisth: 300px;
`
export const PageNotFoundText = styled.h1`
  font-size: 30px;
  color: ${props => props.color};
`

export const NotFoundMessage = styled.p`
  font-size: 18px;
  color: #475569;
`
