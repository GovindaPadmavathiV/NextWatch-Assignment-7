import styled from 'styled-components'

export const TrendingRouterContainer = styled.div`
  min-height: 100vh;
`

export const TrendingContentContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  overflow-y: auto;
`

export const TrendingVideosContainer = styled.div`
  width: 85%;
  background-color: ${props => props.bgColor};
`

export const TrendingVideosList = styled.ul`
  list-style-type: none;
`
