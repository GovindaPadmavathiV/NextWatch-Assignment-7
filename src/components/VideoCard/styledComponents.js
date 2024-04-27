import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.li`
  width: 95%;
  height: 200px;
  font-family: 'Roboto';
  margin-bottom: 30px;
`
export const VideoCardLink = styled(Link)`
  text-decoration: none;
  display: flex;
`

export const VideoThumbline = styled.img`
  width: 300px;
  height: 200px;
`

export const VideoDetailsContainer = styled.div`
  padding-left: 10px;
`

export const VideoTitle = styled.h1`
  font-size: 20px;
  color: ${props => props.color};
`

export const VideoChannel = styled.p`
  font-size: 15px;
  color: #64748b;
`

export const VideoViewsAndPostDateContainer = styled.div`
  font-size: 15px;
  color: #64748b;
  display: flex;
  align-items: center;
`

export const VideoViews = styled.p`
  font-size: 15px;
  color: #64748b;
  margin-right: 10px;
`

export const VideosPostDate = styled.p`
  font-size: 15px;
  color: #64748b;
`
