import styled from 'styled-components'

export const GamingRouterContainer = styled.div`
  min-height: 100vh;
`

export const GamingContentContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  overflow-y: auto;
`

export const GamingVideosContainer = styled.div`
  width: 85%;
  background-color: ${props => props.bgColor};
`

export const GamingVideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
`
