import React from 'react'

const NextWatchAppContext = React.createContext({
  isDarkThemeOn: false,
  userName: '',
  password: '',
  isShowPassword: false,
  showError: false,
  errorMsg: '',
  savedVideos: [],
  selectedTab: '',
  toggleShowError: () => {},
  toggleDarkTheme: () => {},
  onChangeUserName: () => {},
  onChangePassword: () => {},
  toggleShowPassword: () => {},
  successLogin: () => {},
  addVideo: () => {},
  removeVideo: () => {},
  onChangeSelectedTab: () => {},
})

export default NextWatchAppContext
