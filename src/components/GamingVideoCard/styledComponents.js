import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const GamingVideoCardContainer = styled.li`
  margin-left: 20px;
  margin-bottom: 30px;
  font-family: 'Roboto';
`

export const GamingVideoCardLink = styled(Link)`
  text-decoration: none;
`

export const GamingVideoThumbnail = styled.img`
  width: 250px;
  height: 350px;
`

export const GamingVideoTitle = styled.h1`
  font-size: 15px;
  color: ${props => props.color};
`

export const GamingVideoViews = styled.p`
  font-size: 15px;
  color: #64748b;
`
