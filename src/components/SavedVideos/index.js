import {Component} from 'react'

import Cookies from 'js-cookie'

import TabAndLogoPart from '../TabAndLogoPart'

import LoadingView from '../LoadingView'

import NoSavedVideosView from '../NoSavedVideosView'

import Header from '../Header'

import NavigationBar from '../NavigationBar'

import VideoCard from '../VideoCard'

import NextWatchAppContext from '../../context/NextWatchAppContext'

import {
  SavedVideosRouterContainer,
  SavedVideosContentContainer,
  SavedVideosVideosContainer,
  SavedVideosVideosList,
} from './styledComponents'

class SavedVideos extends Component {
  renderSuccessView = (isDarkThemeOn, savedVideos) => (
    <SavedVideosVideosContainer
      data-testid="savedVideos"
      bgColor={isDarkThemeOn ? '#0f0f0f' : '#f9f9f9'}
    >
      {savedVideos.length === 0 ? (
        <NoSavedVideosView />
      ) : (
        <>
          <TabAndLogoPart title="Saved Videos" />
          <SavedVideosVideosList>
            {savedVideos.map(eachVideo => (
              <VideoCard videoDetails={eachVideo} />
            ))}
          </SavedVideosVideosList>
        </>
      )}
    </SavedVideosVideosContainer>
  )

  render() {
    return (
      <NextWatchAppContext.Consumer>
        {value => {
          const {isDarkThemeOn, savedVideos} = value

          return (
            <SavedVideosRouterContainer>
              <Header />
              <SavedVideosContentContainer>
                <NavigationBar />
                {this.renderSuccessView(isDarkThemeOn, savedVideos)}
              </SavedVideosContentContainer>
            </SavedVideosRouterContainer>
          )
        }}
      </NextWatchAppContext.Consumer>
    )
  }
}

export default SavedVideos
