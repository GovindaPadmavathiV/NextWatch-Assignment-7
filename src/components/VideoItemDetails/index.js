import {Component} from 'react'

import Cookies from 'js-cookie'

import ReactPlayer from 'react-player'

import {BsDot} from 'react-icons/bs'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import NextWatchAppContext from '../../context/NextWatchAppContext'
import FailureView from '../FailureView'
import LoadingView from '../LoadingView'

import {
  VideoItemRouter,
  VideoItemContainer,
  VideoItemDetailsContainer,
  VideoTitle,
  VideoAdditionalDetailsAndOptionsContainer,
  VideoViewsAndDurationContainer,
  VideoViews,
  VideoDuration,
  VideoSocialButtonsContainer,
  SocialButton,
  SocialButtonText,
  HrLine,
  ChannelContainer,
  ChannelImage,
  ChannelInfoContainer,
  ChannelName,
  Subscribers,
  ChannelDescription,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemsDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getFormattedData = data => {
    const updatedData = {
      id: data.id,
      title: data.title,
      videoUrl: data.video_url,
      thumbnailUrl: data.thumbnail_url,
      channel: {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        subscriberCount: data.channel.subscriber_count,
      },
      viewCount: data.view_count,
      publishedAt: data.published_at,
      description: data.description,
    }

    return updatedData
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = this.getFormattedData(data.video_details)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onVideoDetailsFailureRetry = () => {
    this.getVideoDetails()
  }

  onClickLike = () => {
    const {isDisliked} = this.state
    if (isDisliked === true) {
      this.setState(prevState => ({
        isLiked: !prevState.isLiked,
        isDisliked: !prevState.isDisliked,
      }))
    } else {
      this.setState(prevState => ({
        isLiked: !prevState.isLiked,
      }))
    }
  }

  onClickDislike = () => {
    const {isLiked} = this.state
    if (isLiked === true) {
      this.setState(prevState => ({
        isLiked: !prevState.isLiked,
        isDisliked: !prevState.isDisliked,
      }))
    } else {
      this.setState(prevState => ({isDisliked: !prevState.isDisliked}))
    }
  }

  getSuccessView = (isDarkThemeOn, addVideo, savedVideos, removeVideo) => {
    const {videoDetails} = this.state
    const {videoUrl, title, viewCount, publishedAt, channel, description} =
      videoDetails
    const {subscriberCount, name, profileImageUrl} = channel
    const {isLiked, isDisliked} = this.state

    const isSaved =
      savedVideos.find(eachVideo => eachVideo.id === videoDetails.id) !==
      undefined

    const onClickSave = () => {
      if (isSaved) {
        removeVideo(videoDetails.id)
      } else {
        addVideo(videoDetails)
      }
    }

    return (
      <VideoItemDetailsContainer
        data-testid="videoItemDetails"
        color={isDarkThemeOn ? '#0f0f0f' : '#f9f9f9'}
      >
        <ReactPlayer url={videoUrl} controls width="97%" height="450px" />
        <VideoTitle color={isDarkThemeOn ? '#ffffff' : '#475569'}>
          {title}
        </VideoTitle>
        <VideoAdditionalDetailsAndOptionsContainer>
          <VideoViewsAndDurationContainer>
            <VideoViews>{viewCount} views</VideoViews>
            <BsDot size={25} color=" #7e858e" />
            <VideoDuration>{publishedAt}</VideoDuration>
          </VideoViewsAndDurationContainer>
          <VideoSocialButtonsContainer>
            <SocialButton
              color={isLiked ? '#2563eb' : '#64748b'}
              onClick={this.onClickLike}
            >
              <AiOutlineLike size={25} />
              <SocialButtonText>Like</SocialButtonText>
            </SocialButton>
            <SocialButton
              color={isDisliked ? '#2563eb' : '#64748b'}
              onClick={this.onClickDislike}
            >
              <AiOutlineDislike size={25} />
              <SocialButtonText>Dislike</SocialButtonText>
            </SocialButton>
            <SocialButton
              color={isSaved ? '#2563eb' : '#64748b'}
              onClick={onClickSave}
            >
              <BiListPlus size={25} />
              <SocialButtonText>{isSaved ? 'Saved' : 'Save'}</SocialButtonText>
            </SocialButton>
          </VideoSocialButtonsContainer>
        </VideoAdditionalDetailsAndOptionsContainer>
        <HrLine />
        <ChannelContainer>
          <ChannelImage src={profileImageUrl} alt="channel logo" />
          <ChannelInfoContainer>
            <ChannelName color={isDarkThemeOn ? '#ffffff' : '#475569'}>
              {name}
            </ChannelName>
            <Subscribers>{subscriberCount} subscribers</Subscribers>
            <ChannelDescription color={isDarkThemeOn ? '#ffffff' : '#475569'}>
              {description}
            </ChannelDescription>
          </ChannelInfoContainer>
        </ChannelContainer>
      </VideoItemDetailsContainer>
    )
  }

  getVedioDetailsView = (isDarkThemeOn, addVideo, savedVideos, removeVideo) => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoadingView />
      case apiStatusConstants.success:
        return this.getSuccessView(
          isDarkThemeOn,
          addVideo,
          savedVideos,
          removeVideo,
        )
      case apiStatusConstants.failure:
        return <FailureView onFailureRetry={this.onVideoDetailsFailureRetry} />
      default:
        return null
    }
  }

  render() {
    return (
      <NextWatchAppContext.Consumer>
        {value => {
          const {isDarkThemeOn, addVideo, savedVideos, removeVideo} = value

          return (
            <VideoItemRouter>
              <Header />
              <VideoItemContainer>
                <NavigationBar />
                {this.getVedioDetailsView(
                  isDarkThemeOn,
                  addVideo,
                  savedVideos,
                  removeVideo,
                )}
              </VideoItemContainer>
            </VideoItemRouter>
          )
        }}
      </NextWatchAppContext.Consumer>
    )
  }
}

export default VideoItemsDetails
