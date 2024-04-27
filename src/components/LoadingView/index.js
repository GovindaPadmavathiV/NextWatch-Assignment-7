import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {LoaderContainer} from './styledComponents'

import NextWatchAppContext from '../../context/NextWatchAppContext'

const LoadingView = () => (
  <NextWatchAppContext.Consumer>
    {value => {
      const {isDarkThemeOn} = value
      return (
        <LoaderContainer
          data-testid="loader"
          bgColor={isDarkThemeOn ? '#000000' : '#f9f9f9'}
        >
          <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
        </LoaderContainer>
      )
    }}
  </NextWatchAppContext.Consumer>
)

export default LoadingView
