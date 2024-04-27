import NextWatchAppContext from '../../context/NextWatchAppContext'

import {
  GamingVideoCardContainer,
  GamingVideoCardLink,
  GamingVideoThumbnail,
  GamingVideoTitle,
  GamingVideoViews,
} from './styledComponents'

const GamingVideoCard = props => (
  <NextWatchAppContext.Consumer>
    {value => {
      const {isDarkThemeOn} = value
      const {videoDetails} = props
      const {id, title, thumbnailUrl, viewCount} = videoDetails

      return (
        <GamingVideoCardContainer>
          <GamingVideoCardLink to={`/videos/${id}`}>
            <GamingVideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <GamingVideoTitle color={isDarkThemeOn ? '#ffffff' : '#1e293b'}>
              {title}
            </GamingVideoTitle>
            <GamingVideoViews>{viewCount} Watching WorldWide</GamingVideoViews>
          </GamingVideoCardLink>
        </GamingVideoCardContainer>
      )
    }}
  </NextWatchAppContext.Consumer>
)
export default GamingVideoCard
