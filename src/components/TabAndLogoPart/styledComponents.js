import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 80px;
  width: 100%;
  padding-left: 30px;
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const TabTitle = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 30px;
  margin-left: 5px;
`
