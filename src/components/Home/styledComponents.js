import styled from 'styled-components'

export const HomeRouteContainer = styled.div`
  min-height: 100vh;
`

export const HomeContentContainer = styled.div`
  display: flex;
`
export const HomeVideosContainer = styled.div`
  width: 85%;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 200px;
  display: ${props => props.bannerDisplay};
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  font-family: 'Roboto';
`

export const BannerLeftPart = styled.div`
  padding-left: 20px;
`
export const BannerImg = styled.img`
  height: 40px;
`

export const BannerText = styled.p`
  font-size: 15px;
  color: #475569;
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: 1px solid #475569;
  color: #475569;
  height: 40px;
  width: 120px;
  outline: none;
  margin-top: 30px;
`

export const BannerRightPart = styled.div`
  padding-right: 20px;
`

export const BannerCloseButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  outline: none;
`
export const SearchContainer = styled.div`
  height: 35px;
  width: 40%;
  margin-left: 30px;
  margin-top: 30px;
  border: 1px solid ${props => props.borderColor};
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: space-between;
`
export const SearchInput = styled.input`
  background-color: transparent;
  border-width: 0px;
  height: 35px;
  outline: none;
  padding-left: 15px;
  flex-grow: 1;
  color: ${props => props.color};
`
export const SearchButton = styled.button`
  height: 34px;
  width: 70px;
  background-color: ${props => props.bgColor};
  border: 1px solid ${props => props.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const VideosContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
export const NoVideosFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  padding-top: 30px;
`

export const NoVideosImage = styled.img`
  height: 250px;
  width: 300px;
`

export const NoVideosText = styled.h1`
  font-size: 20px;
  color: ${props => props.color};
`

export const NoVideosMessage = styled.p`
  font-size: 15px;
  color: #7e858e;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  border-radius: 5px;
  height: 40px;
  width: 120px;
  border-width: 0px;
  color: #ebebeb;
  outline: none;
`
