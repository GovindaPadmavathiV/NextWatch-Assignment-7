import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {CgPlayListAdd} from 'react-icons/cg'

import NextWatchAppContext from '../../context/NextWatchAppContext'

import {
  NavigationBarContainer,
  NavListContainer,
  NavItem,
  NavLink,
  NavLinkButton,
  NavText,
  ContactUsContainer,
  ContactUstext,
  WebsitesLogosContainer,
  Logo,
  Caption,
} from './styledComponents'

const NavigationBar = () => (
  <NextWatchAppContext.Consumer>
    {value => {
      const {isDarkThemeOn, selectedTab, onChangeSelectedTab} = value

      const onClickHomeTab = () => {
        onChangeSelectedTab('Home')
      }

      const onClickTrendingTab = () => {
        onChangeSelectedTab('Trending')
      }

      const onClickGamingTab = () => {
        onChangeSelectedTab('Gaming')
      }

      const onClickSavedVideosTab = () => {
        onChangeSelectedTab('SavedVideos')
      }

      return (
        <NavigationBarContainer bgColor={isDarkThemeOn ? '#212121' : '#ffffff'}>
          <NavListContainer>
            <NavLink to="/" onClick={onClickHomeTab}>
              <NavItem
                bgColor={
                  selectedTab === 'Home'
                    ? isDarkThemeOn
                      ? '#424242'
                      : '#f1f5f9'
                    : null
                }
              >
                <NavLinkButton type="button">
                  <AiFillHome
                    size={20}
                    color={
                      selectedTab === 'Home'
                        ? '#ff0000'
                        : isDarkThemeOn
                        ? '#909090'
                        : '#383838'
                    }
                  />
                  <NavText color={isDarkThemeOn ? '#ffffff' : '#475569'}>
                    Home
                  </NavText>
                </NavLinkButton>
              </NavItem>
            </NavLink>
            <NavLink to="/trending" onClick={onClickTrendingTab}>
              <NavItem
                bgColor={
                  selectedTab === 'Trending'
                    ? isDarkThemeOn
                      ? '#424242'
                      : '#f1f5f9'
                    : null
                }
              >
                <NavLinkButton type="button">
                  <HiFire
                    size={20}
                    color={
                      selectedTab === 'Trending'
                        ? '#ff0000'
                        : isDarkThemeOn
                        ? '#909090'
                        : '#383838'
                    }
                  />
                  <NavText color={isDarkThemeOn ? '#ffffff' : '#475569'}>
                    Trending
                  </NavText>
                </NavLinkButton>
              </NavItem>
            </NavLink>
            <NavLink to="/gaming" onClick={onClickGamingTab}>
              <NavItem
                bgColor={
                  selectedTab === 'Gaming'
                    ? isDarkThemeOn
                      ? '#424242'
                      : '#f1f5f9'
                    : null
                }
              >
                <NavLinkButton type="button">
                  <SiYoutubegaming
                    size={20}
                    color={
                      selectedTab === 'Gaming'
                        ? '#ff0000'
                        : isDarkThemeOn
                        ? '#909090'
                        : '#383838'
                    }
                  />
                  <NavText color={isDarkThemeOn ? '#ffffff' : '#475569'}>
                    Gaming
                  </NavText>
                </NavLinkButton>
              </NavItem>
            </NavLink>
            <NavLink to="/saved-videos" onClick={onClickSavedVideosTab}>
              <NavItem
                bgColor={
                  selectedTab === 'SavedVideos'
                    ? isDarkThemeOn
                      ? '#424242'
                      : '#f1f5f9'
                    : null
                }
              >
                <NavLinkButton type="button">
                  <CgPlayListAdd
                    size={20}
                    color={
                      selectedTab === 'SavedVideos'
                        ? '#ff0000'
                        : isDarkThemeOn
                        ? '#909090'
                        : '#383838'
                    }
                  />
                  <NavText color={isDarkThemeOn ? '#ffffff' : '#475569'}>
                    Saved Videos
                  </NavText>
                </NavLinkButton>
              </NavItem>
            </NavLink>
          </NavListContainer>
          <ContactUsContainer>
            <ContactUstext color={isDarkThemeOn ? '#ffffff' : '#475569'}>
              CONTACT US
            </ContactUstext>
            <WebsitesLogosContainer>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </WebsitesLogosContainer>
            <Caption color={isDarkThemeOn ? '#ffffff' : '#475569'}>
              Enjoy! Now to see your channels and recommendations!
            </Caption>
          </ContactUsContainer>
        </NavigationBarContainer>
      )
    }}
  </NextWatchAppContext.Consumer>
)

export default NavigationBar
