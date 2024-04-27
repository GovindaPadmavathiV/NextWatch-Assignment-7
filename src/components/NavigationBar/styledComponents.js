import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const NavigationBarContainer = styled.nav`
  width: 15%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
`

export const NavListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 100%;
  font-family: 'Roboto';
`

export const NavItem = styled.li`
  width: 100%;
  padding-left: 20px;
  background-color: ${props => props.bgColor};
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavLinkButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border-width: 0px;
  outline: none;
  display: flex;
  align-items: center;
`

export const NavText = styled.p`
  font-size: 18px;
  color: ${props => props.color};
  margin-left: 20px;
  margin-top: 21px;
`

export const ContactUsContainer = styled.div`
  padding: 20px;
`

export const ContactUstext = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`

export const WebsitesLogosContainer = styled.div`
  display: flex;
`
export const Logo = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 20px;
`

export const Caption = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
