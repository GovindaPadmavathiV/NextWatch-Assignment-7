import {Component} from 'react'

import Cookies from 'js-cookie'

import TabAndLogoPart from '../TabAndLogoPart'

import LoadingView from '../LoadingView'

import FailureView from '../FailureView'

import Header from '../Header'

import NavigationBar from '../NavigationBar'

import GamingVideoCard from '../GamingVideoCard'

import NextWatchAppContext from '../../context/NextWatchAppContext'

import {
  GamingRouterContainer,
  GamingContentContainer,
  GamingVideosContainer,
  GamingVideosList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {videosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getFormattedData = data => {
    const updatedData = {
      id: data.id,
      title: data.title,
      thumbnailUrl: data.thumbnail_url,
      viewCount: data.view_count,
    }

    return updatedData
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo =>
        this.getFormattedData(eachVideo),
      )

      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onGamingFailureRetry = () => {
    this.getGamingVideos()
  }

  renderSuccessView = isDarkThemeOn => {
    const {videosList} = this.state
    return (
      <GamingVideosContainer
        data-testid="gaming"
        bgColor={isDarkThemeOn ? '#0f0f0f' : '#f9f9f9'}
      >
        <TabAndLogoPart title="Gaming" />
        <GamingVideosList>
          {videosList.map(eachVideo => (
            <GamingVideoCard videoDetails={eachVideo} key={eachVideo.id} />
          ))}
        </GamingVideosList>
      </GamingVideosContainer>
    )
  }

  renderView = isDarkThemeOn => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoadingView />
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkThemeOn)
      case apiStatusConstants.failure:
        return <FailureView onFailureRetry={this.onGamingFailureRetry} />
      default:
        return null
    }
  }

  render() {
    return (
      <NextWatchAppContext.Consumer>
        {value => {
          const {isDarkThemeOn} = value
          return (
            <GamingRouterContainer>
              <Header />
              <GamingContentContainer>
                <NavigationBar />
                {this.renderView(isDarkThemeOn)}
              </GamingContentContainer>
            </GamingRouterContainer>
          )
        }}
      </NextWatchAppContext.Consumer>
    )
  }
}

export default Gaming
