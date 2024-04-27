import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {CgPlayListAdd} from 'react-icons/cg'

import {MainContainer, TabTitle} from './styledComponents'

import NextWatchAppContext from '../../context/NextWatchAppContext'

const TabAndLogoPart = props => (
  <NextWatchAppContext.Consumer>
    {value => {
      const {isDarkThemeOn, selectedTab} = value
      const {title} = props

      const getIcon = () => {
        if (selectedTab === 'Home') {
          return <AiFillHome size={30} color="#ff0b37" />
        } else if (selectedTab === 'Trending') {
          return <HiFire size={30} color="#ff0b37" />
        } else if (selectedTab === 'Gaming') {
          return <SiYoutubegaming size={30} color="#ff0b37" />
        } else {
          return <CgPlayListAdd size={30} color="#ff0b37" />
        }
      }

      return (
        <MainContainer bgColor={isDarkThemeOn ? '#181818' : '#ebebeb'}>
          {getIcon()}
          <TabTitle color={isDarkThemeOn ? '#ffffff' : '#1e293b'}>
            {title}
          </TabTitle>
        </MainContainer>
      )
    }}
  </NextWatchAppContext.Consumer>
)

export default TabAndLogoPart
