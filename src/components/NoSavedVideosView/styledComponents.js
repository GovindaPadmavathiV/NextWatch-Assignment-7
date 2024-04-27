import styled from 'styled-components'

export const NoSavedVideosViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  padding-top: 120px;
  width: 95%;
`

export const NoSavedVideosViewImage = styled.img`
  height: 250px;
  width: 350px;
`
export const NoSavedVideosText = styled.h1`
  font-size: 20px;
  color: ${props => props.color};
`

export const NoSavedVideosMessage = styled.p`
  font-size: 15px;
  color: #7e858e;
`
