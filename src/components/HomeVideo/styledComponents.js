import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const VideoItem = styled.li`
  width: 30%;
  margin-left: 20px;
  margin-bottom: 20px;
  font-family: 'Roboto';
`

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 200px;
`

export const VideoBottomContainer = styled.div`
  display: flex;
`

export const ProfileImage = styled.img`
  margin-top: 20px;
  height: 40px;
  width: 40px;
`
export const VideoDetailsContainer = styled.div`
  margin-left: 10px;
`

export const VideoTitle = styled.p`
  font-size: 15px;
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  font-size: 12px;
  color: #7e858e;
`
export const ViewsAndPublishedDataContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ViewsCount = styled.p`
  font-size: 12px;
  color: #7e858e;
  margin-right: 20px;
`

export const TimePeriod = styled.p`
  font-size: 12px;
  color: #7e858e;
`
