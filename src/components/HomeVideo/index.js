import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import NextWatchAppContext from '../../context/NextWatchAppContext'

import {
  VideoLink,
  VideoItem,
  ThumbnailImage,
  VideoBottomContainer,
  ProfileImage,
  VideoDetailsContainer,
  VideoTitle,
  ChannelName,
  ViewsAndPublishedDataContainer,
  ViewsCount,
  TimePeriod,
} from './styledComponents'

const HomeVideo = props => (
  <NextWatchAppContext.Consumer>
    {value => {
      const {isDarkThemeOn} = value
      const {videoDetails} = props
      const {id, title, thumbnailUrl, channel, viewCount, publishedAt} =
        videoDetails
      const {name, profileImageUrl} = channel
      return (
        <VideoItem>
          <VideoLink to={`/videos/${id}`}>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoBottomContainer>
              <ProfileImage src={profileImageUrl} alt='channel logo' />
              <VideoDetailsContainer>
                <VideoTitle color={isDarkThemeOn ? '#ffffff' : '#7e858e'}>
                  {title}
                </VideoTitle>
                <ChannelName>{name}</ChannelName>
                <ViewsAndPublishedDataContainer>
                  <ViewsCount>{viewCount}</ViewsCount>
                  <BsDot size={25} color="#7e858e" />
                  <TimePeriod>{publishedAt}</TimePeriod>
                </ViewsAndPublishedDataContainer>
              </VideoDetailsContainer>
            </VideoBottomContainer>
          </VideoLink>
        </VideoItem>
      )
    }}
  </NextWatchAppContext.Consumer>
)

export default HomeVideo
