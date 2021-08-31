import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import MainframeSection from './components/MainframeSection/MainframeHome'

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  return (
    <>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%', minHeight: '780px' } }}
        index={2}
        background=''
        hasCurvedDivider={false}
      >
        <MainframeSection />
      </PageSection>
    </>
  )
}

export default Home
