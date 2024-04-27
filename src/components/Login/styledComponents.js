import styled from 'styled-components'

export const LoginRouteContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor}
`

export const LoginFormContainer = styled.div`
  box-shadow: ${props => props.shadow};
  border-radius: 12px;
  width: 30%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor}
`

export const NextWatchImg = styled.img`
  height: 40px;
  width: 180px;
  margin-bottom: 30px;
`
export const LoginForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
`

export const Label = styled.label`
  font-size: 12px;
  color: ${props => props.color};
  margin-bottom: 8px;
`

export const InputContainer = styled.input`
  height: 40px;
  width: 100%;
  border: 1.5px solid #e2e8f0;
  border-radius: 5px;
  padding-left: 20px;
  margin-bottom: 20px;
  outline: none;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ShowPasswordLabel = styled.label`
  font-size: 15px;
  color: ${props => props.color};
`
export const CheckBox = styled.input`
  width: 15px;
  margin-right: 8px;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border-width: 0px;
  outline: none;
  background-color: #3b82f6;
  color: #ffffff;
  margin-top: 25px;
`
export const ErrorMsg = styled.p`
  font-size: 12px;
  color: #ff0b37;
`
