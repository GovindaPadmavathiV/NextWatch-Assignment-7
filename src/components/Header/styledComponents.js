import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 10vh;
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const WebsiteLogo = styled.img`
  height: 40px;
  width: 150px;
`
export const DifferentOptionsContainer = styled.div`
  display: flex;
`
export const OptionButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  outline: none;
  margin-left: 30px;
`
export const Profile = styled.img`
  height: 25px;
  width: 25px;
`
export const LogoutButton = styled.button`
  height: 40px;
  width: 100px;
  background-color: transparent;
  border 1px solid ${props => props.color};
  color: ${props => props.color};
  margin-left: 30px;
`
export const LogOutPopUp = styled.div`
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  height: 200px;
  width: 400px;
`

export const AreYouSureText = styled.p`
  font-size: 18px;
  color: ${props => props.color};
`

export const ButtonsContainer = styled.div`
  display: flex;
`
export const CancelButton = styled.button`
  border: 1px solid ${props => props.color};
  background-color: transparent;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  color: ${props => props.color};
  outline: none;
  margin-right: 15px;
`
export const ConfirmButton = styled.button`
  border-width: 0px;
  background-color: #3b82f6;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  color: #ffffff;
  outline: none;
`
