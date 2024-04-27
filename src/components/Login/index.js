import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import NextWatchAppContext from '../../context/NextWatchAppContext'

import {
  LoginRouteContainer,
  LoginFormContainer,
  NextWatchImg,
  LoginForm,
  Label,
  InputContainer,
  CheckBox,
  ShowPasswordContainer,
  ShowPasswordLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

const Login = props => {
  const token = Cookies.get('jwt_token')

  if (token !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <NextWatchAppContext.Consumer>
      {value => {
        const {
          userName,
          password,
          showError,
          onChangeUserName,
          onChangePassword,
          toggleShowPassword,
          isShowPassword,
          errorMsg,
          toggleShowError,
          successLogin,
          isDarkThemeOn,
        } = value

        const onUserNameChange = event => {
          onChangeUserName(event.target.value)
        }

        const onPasswordChange = event => {
          onChangePassword(event.target.value)
        }

        const onClickShowPassword = () => {
          toggleShowPassword()
        }

        const onSubmitFailure = error => {
          toggleShowError(error)
        }

        const onSubmitSuccess = jwtToken => {
          const {history} = props

          Cookies.set('jwt_token', jwtToken, {expires: 30})
          history.replace('/')
          successLogin()
        }

        const onSubmitForm = async event => {
          event.preventDefault()
          const userDetails = {
            username: userName,
            password,
          }

          const url = 'https://apis.ccbp.in/login'

          const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
          }

          const response = await fetch(url, options)
          const data = await response.json()

          if (response.ok) {
            onSubmitSuccess(data.jwt_token)
          } else {
            onSubmitFailure(data.error_msg)
          }
        }

        return (
          <LoginRouteContainer bgColor={isDarkThemeOn ? '#212121' : '#ffffff'}>
            <LoginFormContainer
              bgColor={isDarkThemeOn ? '#000000' : '#ffffff'}
              shadow={isDarkThemeOn ? 'none' : '0px 0px 5px 5px #bfbfbf'}
            >
              <NextWatchImg
                src={
                  isDarkThemeOn
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
              <LoginForm onSubmit={onSubmitForm}>
                <Label
                  htmlFor="userName"
                  color={isDarkThemeOn ? '#ffffff' : '#475569'}
                >
                  USERNAME
                </Label>
                <InputContainer
                  type="text"
                  id="userName"
                  placeholder="Username"
                  onChange={onUserNameChange}
                  value={userName}
                />
                <Label
                  htmlFor="password"
                  color={isDarkThemeOn ? '#ffffff' : '#475569'}
                >
                  PASSWORD
                </Label>
                <InputContainer
                  value={password}
                  id="password"
                  type={isShowPassword ? 'text' : 'password'}
                  placeholder="Password"
                  onChange={onPasswordChange}
                />
                <ShowPasswordContainer>
                  <CheckBox
                    type="checkbox"
                    id="showPaddword"
                    onClick={onClickShowPassword}
                  />
                  <ShowPasswordLabel
                    htmlFor="showPaddword"
                    color={isDarkThemeOn ? '#ffffff' : '#475569'}
                  >
                    Show Password
                  </ShowPasswordLabel>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showError ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
              </LoginForm>
            </LoginFormContainer>
          </LoginRouteContainer>
        )
      }}
    </NextWatchAppContext.Consumer>
  )
}

export default Login
