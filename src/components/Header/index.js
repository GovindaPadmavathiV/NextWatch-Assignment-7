import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

import NextWatchAppContext from '../../context/NextWatchAppContext'

import {
  HeaderContainer,
  WebsiteLogo,
  DifferentOptionsContainer,
  OptionButton,
  Profile,
  LogoutButton,
  LogOutPopUp,
  AreYouSureText,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => (
  <NextWatchAppContext.Consumer>
    {value => {
      const {toggleDarkTheme, isDarkThemeOn} = value

      const onClickLogout = () => {
        const {history} = props
        history.replace('/login')
        Cookies.remove('jwt_token')
      }

      const onClickTheme = () => {
        toggleDarkTheme()
      }

      return (
        <HeaderContainer bgColor={isDarkThemeOn ? '#212121' : '#ffffff'}>
          <WebsiteLogo
            src={
              isDarkThemeOn
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="website logo"
          />
          <DifferentOptionsContainer>
            <OptionButton
              data-testid="theme"
              type="button"
              onClick={onClickTheme}
            >
              {isDarkThemeOn ? (
                <BsBrightnessHigh size={25} color="ffffff" />
              ) : (
                <BsMoon size={25} />
              )}
            </OptionButton>
            <OptionButton type="button">
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </OptionButton>
            <Popup
              modal
              trigger={
                <LogoutButton
                  type="button"
                  color={isDarkThemeOn ? '#ffffff' : '#3b82f6'}
                >
                  Logout
                </LogoutButton>
              }
              className="popup-content"
            >
              {close => (
                <LogOutPopUp bgColor={isDarkThemeOn ? '#212121' : '#ffffff'}>
                  <AreYouSureText color={isDarkThemeOn ? '#ffffff' : '#00306e'}>
                    Are you sure you want to logout?
                  </AreYouSureText>
                  <ButtonsContainer>
                    <CancelButton
                      type="button"
                      onClick={() => close()}
                      color={isDarkThemeOn ? '#d7dfe9' : '#94a3b8'}
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </LogOutPopUp>
              )}
            </Popup>
          </DifferentOptionsContainer>
        </HeaderContainer>
      )
    }}
  </NextWatchAppContext.Consumer>
)

export default withRouter(Header)
