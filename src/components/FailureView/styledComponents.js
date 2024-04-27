import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  padding-top: 30px;
  width: 85%;
  background-color: ${props => props.bgColor};
`

export const FailureViewImage = styled.img`
  height: 250px;
  width: 300px;
`
export const OppsText = styled.h1`
  font-size: 20px;
  color: ${props => props.color};
`

export const FailureMessage = styled.p`
  font-size: 15px;
  color: #7e858e;
`
export const FailureRetryButton = styled.button`
  background-color: #4f46e5;
  border-radius: 5px;
  height: 40px;
  width: 120px;
  border-width: 0px;
  color: #ebebeb;
  outline: none;
`
