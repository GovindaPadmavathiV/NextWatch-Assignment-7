import {Component} from 'react'

import Cookies from 'js-cookie'

import TabAndLogoPart from '../TabAndLogoPart'

import LoadingView from '../LoadingView'

import FailureView from '../FailureView'

import Header from '../Header'

import NavigationBar from '../NavigationBar'

import VideoCard from '../VideoCard'

import NextWatchAppContext from '../../context/NextWatchAppContext'

import {
  TrendingRouterContainer,
  TrendingContentContainer,
  TrendingVideosContainer,
  TrendingVideosList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {videosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getFormattedData = data => {
    const updatedData = {
      id: data.id,
      title: data.title,
      thumbnailUrl: data.thumbnail_url,
      channel: {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
      },
      viewCount: data.view_count,
      publishedAt: data.published_at,
    }

    return updatedData
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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

  onTrendingFailureRetry = () => {
    this.getTrendingVideos()
  }

  renderSuccessView = isDarkThemeOn => {
    const {videosList} = this.state
    return (
      <TrendingVideosContainer data-testid='trending' bgColor={isDarkThemeOn ? '#0f0f0f' : '#f9f9f9'}>
        <TabAndLogoPart title="Trending" />
        <TrendingVideosList>
          {videosList.map(eachVideo => (
            <VideoCard videoDetails={eachVideo} />
          ))}
        </TrendingVideosList>
      </TrendingVideosContainer>
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
        return <FailureView onFailureRetry={this.onTrendingFailureRetry} />
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
            <TrendingRouterContainer>
              <Header />
              <TrendingContentContainer>
                <NavigationBar />
                {this.renderView(isDarkThemeOn)}
              </TrendingContentContainer>
            </TrendingRouterContainer>
          )
        }}
      </NextWatchAppContext.Consumer>
    )
  }
}

export default Trending
