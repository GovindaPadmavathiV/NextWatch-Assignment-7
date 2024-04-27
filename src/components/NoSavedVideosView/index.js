import NextWatchAppCOntext from '../../context/NextWatchAppContext'

import {
  NoSavedVideosViewContainer,
  NoSavedVideosViewImage,
  NoSavedVideosText,
  NoSavedVideosMessage,
} from './styledComponents'

const NoSavedVideosView = props => (
  <NextWatchAppCOntext.Consumer>
    {value => {
      const {isDarkThemeOn} = value

      const {onFailureRetry} = props

      const onClickRetry = () => {
        onFailureRetry()
      }

      return (
        <NoSavedVideosViewContainer>
          <NoSavedVideosViewImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedVideosText color={isDarkThemeOn ? '#ffffff' : '#231f20'}>
            No saved videos found
          </NoSavedVideosText>
          <NoSavedVideosMessage>
            You can save your videos while watching them
          </NoSavedVideosMessage>
        </NoSavedVideosViewContainer>
      )
    }}
  </NextWatchAppCOntext.Consumer>
)

export default NoSavedVideosView
