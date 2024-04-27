import './App.css'

import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import NextWatchAppContext from './context/NextWatchAppContext'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {
    isDarkThemeOn: false,
    userName: '',
    password: '',
    isShowPassword: false,
    showError: false,
    errorMsg: '',
    savedVideos: [],
    selectedTab: 'Home',
  }

  toggleDarkTheme = () => {
    this.setState(prevState => ({isDarkThemeOn: !prevState.isDarkThemeOn}))
  }

  onChangeUserName = name => {
    this.setState({userName: name})
  }

  onChangePassword = newPassword => {
    this.setState({password: newPassword})
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  toggleShowError = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  successLogin = () => {
    this.setState({
      showError: false,
      errorMsg: '',
      userName: '',
      password: '',
      isShowPassword: false,
    })
  }

  addVideo = videoDetails => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, videoDetails],
    }))
  }

  removeVideo = uniqueId => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(
      eachVideo => eachVideo.id !== uniqueId,
    )
    this.setState({savedVideos: updatedSavedVideos})
  }

  onChangeSelectedTab = selectedTab => {
    this.setState({selectedTab})
  }

  render() {
    const {
      userName,
      password,
      isShowPassword,
      isDarkThemeOn,
      showError,
      errorMsg,
      savedVideos,
      selectedTab,
    } = this.state
    return (
      <NextWatchAppContext.Provider
        value={{
          userName,
          password,
          isShowPassword,
          isDarkThemeOn,
          showError,
          errorMsg,
          savedVideos,
          selectedTab,
          toggleShowError: this.toggleShowError,
          toggleDarkTheme: this.toggleDarkTheme,
          onChangeUserName: this.onChangeUserName,
          onChangePassword: this.onChangePassword,
          toggleShowPassword: this.toggleShowPassword,
          successLogin: this.successLogin,
          addVideo: this.addVideo,
          removeVideo: this.removeVideo,
          onChangeSelectedTab: this.onChangeSelectedTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NextWatchAppContext.Provider>
    )
  }
}

export default App
