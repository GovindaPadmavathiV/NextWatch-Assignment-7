import styled from 'styled-components'

export const SavedVideosRouterContainer = styled.div`
  min-height: 100vh;
`

export const SavedVideosContentContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  overflow-y: auto;
`

export const SavedVideosVideosContainer = styled.div`
  width: 85%;
  background-color: ${props => props.bgColor};
`

export const SavedVideosVideosList = styled.ul`
  list-style-type: none;
`
