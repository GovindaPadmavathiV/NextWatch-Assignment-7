import NextWatchAppContext from '../../context/NextWatchAppContext'

import {
  FailureViewContainer,
  FailureViewImage,
  OppsText,
  FailureMessage,
  FailureRetryButton,
} from './styledComponents'

const FailureView = props => (
  <NextWatchAppContext.Consumer>
    {value => {
      const {isDarkThemeOn} = value

      const {onFailureRetry} = props

      const onClickRetry = () => {
        onFailureRetry()
      }

      return (
        <FailureViewContainer bgColor={isDarkThemeOn ? '#000000' : '#f4f4f4'}>
          <FailureViewImage
            src={
              isDarkThemeOn
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            }
            alt="failure view"
          />
          <OppsText color={isDarkThemeOn ? '#ffffff' : '#231f20'}>
            Oops! Something Went Wrong
          </OppsText>
          <FailureMessage>
            We are having some trouble to complete your request. Please try
            again.
          </FailureMessage>
          <FailureRetryButton type="button" onClick={onClickRetry}>
            Retry
          </FailureRetryButton>
        </FailureViewContainer>
      )
    }}
  </NextWatchAppContext.Consumer>
)

export default FailureView
