import styled from 'styled-components'

export const VideoItemRouter = styled.div`
  min-height: 100vh;
`

export const VideoItemContainer = styled.div`
  height: 90vh;
  display: flex;
`
export const VideoItemDetailsContainer = styled.div`
  width: 85%;
  height: 90vh;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  font-family: 'Roboto';
`

export const VideoTitle = styled.p`
  font-size: 20px;
  color: ${props => props.color};
  width: 97%;
`

export const VideoAdditionalDetailsAndOptionsContainer = styled.div`
  display: flex;
  width: 97%;
  justify-content: space-between;
`

export const VideoViewsAndDurationContainer = styled.div`
  display: flex;
  align-items: center;
`

export const VideoViews = styled.p`
  font-size: 15px;
  color: #7e858e;
  margin-right: 10px;
`
export const VideoDuration = styled.p`
  font-size: 15px;
  color: #7e858e;
`

export const VideoSocialButtonsContainer = styled.div`
  display: flex;
`

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border-width: 0px;
  background-color: transparent;
  height: 40px;
  color: ${props => props.color};
  margin-right: 15px;
`

export const SocialButtonText = styled.p`
  font-size: 16px;
  margin-left: 10px;
`
export const HrLine = styled.hr`
  height: 1px;
  width: 97%;
  background-color: #7e858e;
  border-width: 0px;
`
export const ChannelContainer = styled.div`
  width: 97%;
  display: flex;
  margin-top: 20px;
`
export const ChannelImage = styled.img`
  height: 60px;
  width: 60px;
  margin-top: 20px;
`

export const ChannelInfoContainer = styled.div`
  margin-left: 20px;
  font-family: 'Roboto';
`

export const ChannelName = styled.p`
  font-size: 18px;
  color: ${props => props.color};
`

export const Subscribers = styled.p`
  font-size: 15px;
  color: #7e858e;
`

export const ChannelDescription = styled.p`
  margin-top: 30px;
  font-size: 18px;
  color: ${props => props.color};
`
