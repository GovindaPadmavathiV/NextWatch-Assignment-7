import {BsDot} from 'react-icons/bs'

import NextWatchAppContext from '../../context/NextWatchAppContext'

import {
  VideoCardContainer,
  VideoCardLink,
  VideoThumbline,
  VideoDetailsContainer,
  VideoTitle,
  VideoChannel,
  VideoViewsAndPostDateContainer,
  VideoViews,
  VideosPostDate,
} from './styledComponents'

const VideoCard = props => (
  <NextWatchAppContext.Consumer>
    {value => {
      const {isDarkThemeOn} = value
      const {videoDetails} = props
      const {id, title, thumbnailUrl, channel, viewCount, publishedAt} =
        videoDetails
      const {name, profileImageUrl} = channel

      return (
        <VideoCardContainer>
          <VideoCardLink to={`/videos/${id}`}>
            <VideoThumbline src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetailsContainer>
              <VideoTitle color={isDarkThemeOn ? '#ffffff' : '#181818'}>
                {title}
              </VideoTitle>
              <VideoChannel>{name}</VideoChannel>
              <VideoViewsAndPostDateContainer>
                <VideoViews>{viewCount}</VideoViews>
                <BsDot size={25} color="#7e858e" />
                <VideosPostDate>{publishedAt}</VideosPostDate>
              </VideoViewsAndPostDateContainer>
            </VideoDetailsContainer>
          </VideoCardLink>
        </VideoCardContainer>
      )
    }}
  </NextWatchAppContext.Consumer>
)

export default VideoCard
