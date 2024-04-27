import Header from '../Header'

import NavigationBar from '../NavigationBar'

import NextWatchAppContext from '../../context/NextWatchAppContext'

import {
  NotFoundRouter,
  NotFoundContainer,
  NotFoundContentContainer,
  NotFoundImage,
  PageNotFoundText,
  NotFoundMessage,
} from './styledComponents'

const NotFound = () => (
  <NextWatchAppContext.Consumer>
    {value => {
      const {isDarkThemeOn} = value

      return (
        <NotFoundRouter>
          <Header />
          <NotFoundContainer>
            <NavigationBar />
            <NotFoundContentContainer
              bgColor={isDarkThemeOn ? '#000000' : '#f9f9f9'}
            >
              <NotFoundImage
                src={
                  isDarkThemeOn
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not-found"
              />
              <PageNotFoundText color={isDarkThemeOn ? '#ffffff' : '#1e293b'}>
                Page Not Found
              </PageNotFoundText>
              <NotFoundMessage>
                We are sorry, the page you requested could not be found.
              </NotFoundMessage>
            </NotFoundContentContainer>
          </NotFoundContainer>
        </NotFoundRouter>
      )
    }}
  </NextWatchAppContext.Consumer>
)

export default NotFound
