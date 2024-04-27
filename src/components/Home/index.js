import {Component} from 'react'

import Cookies from 'js-cookie'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'

import NavigationBar from '../NavigationBar'

import NextWatchAppContext from '../../context/NextWatchAppContext'

import HomeVideo from '../HomeVideo'

import FailureView from '../FailureView'

import LoadingView from '../LoadingView'

import {
  HomeRouteContainer,
  HomeContentContainer,
  HomeVideosContainer,
  BannerContainer,
  BannerLeftPart,
  BannerImg,
  BannerText,
  BannerButton,
  BannerRightPart,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosContainer,
  NoVideosFoundContainer,
  NoVideosImage,
  NoVideosText,
  NoVideosMessage,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    bannerDisplay: 'flex',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosData()
  }

  onCloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  formattedData = data => {
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

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

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
        this.formattedData(eachVideo),
      )

      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getVideosData()
  }

  onClickRetry = () => {
    this.setState({searchInput: ''}, this.getVideosData)
  }

  onClickFailureRetry = () => {
    this.getVideosData()
  }

  renderNoVideosFoundView = isDarkThemeOn => (
    <NoVideosFoundContainer>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="not found"
      />
      <NoVideosText color={isDarkThemeOn ? '#ffffff' : '#231f20'}>
        No Search results found
      </NoVideosText>
      <NoVideosMessage>
        Try different key words or remove search filter
      </NoVideosMessage>
      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </NoVideosFoundContainer>
  )

  renderSuccessView = isDarkThemeOn => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.renderNoVideosFoundView(isDarkThemeOn)
    }
    return (
      <VideosContainer>
        {videosList.map(eachVideo => (
          <HomeVideo videoDetails={eachVideo} key={eachVideo.id} />
        ))}
      </VideosContainer>
    )
  }

  getHomeVideosView = isDarkThemeOn => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoadingView />
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkThemeOn)
      case apiStatusConstants.failure:
        return <FailureView onFailureRetry={this.onClickFailureRetry} />
      default:
        return null
    }
  }

  render() {
    const {bannerDisplay, searchInput} = this.state

    return (
      <NextWatchAppContext.Consumer>
        {value => {
          const {isDarkThemeOn} = value
          return (
            <HomeRouteContainer>
              <Header />
              <HomeContentContainer>
                <NavigationBar />
                <HomeVideosContainer
                  data-testid="home"
                  bgColor={isDarkThemeOn ? '#181818' : '#f9f9f9'}
                >
                  <BannerContainer
                    bannerDisplay={bannerDisplay}
                    data-testid="banner"
                  >
                    <BannerLeftPart>
                      <BannerImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerLeftPart>
                    <BannerRightPart>
                      <BannerCloseButton
                        type="button"
                        onClick={this.onCloseBanner}
                        data-testid="close"
                      >
                        <AiOutlineClose size={25} color="#475569" />
                      </BannerCloseButton>
                    </BannerRightPart>
                  </BannerContainer>
                  <SearchContainer
                    bgColor={isDarkThemeOn ? '#181818' : '#ffffff'}
                    borderColor={isDarkThemeOn ? '#424242' : '#d7dfe9'}
                  >
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onChangeSearchInput}
                      color={isDarkThemeOn ? '#ffffff' : '#000000'}
                    />
                    <SearchButton
                      data-testid="searchButton"
                      type="button"
                      onClick={this.onClickSearch}
                      bgColor={isDarkThemeOn ? '#383838' : '#f9f9f9'}
                      borderColor={isDarkThemeOn ? '#424242' : '#d7dfe9'}
                    >
                      <AiOutlineSearch size={20} color="#475569" />
                    </SearchButton>
                  </SearchContainer>
                  {this.getHomeVideosView(isDarkThemeOn)}
                </HomeVideosContainer>
              </HomeContentContainer>
            </HomeRouteContainer>
          )
        }}
      </NextWatchAppContext.Consumer>
    )
  }
}

export default Home
