import React from 'react'
import styled from 'styled-components'
import MainframeTokenIcon from '../../../../assets/mainframe/zbdo_logo_token.svg'
import CardMainframe from './Card'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: aliceblue;
  gap: 50px;
`
const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  img{
    width: 150px;
  }
  h2{
    font-size: 50px;
    font-family: 'Conv_EarthsMightiestExpandItal-nqLO';
    letter-spacing: 2px;
    text-shadow: 1px 1px #98FBF6;
  }
`
const CardsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
  flex-direction: column;
  ${({theme}) => theme.mediaQueries.nav}{
    flex-direction: row;
    gap: 10px;
  }
`
const cardsData = [
  {
    title: '1000% APY',
    description: '+ 2x Airdrop Until Oct 31, 2021',
    info: '1. Swap to $ZBDO',
    buttonText: 'Swap',
    href: '/swap'
  },
  {
    title: 'Master Node',
    description: 'Bot Generator (Smart NFT), ZBD Fueling Station',
    info: '2. Stake Mainframe',
    buttonText: 'Stake',
    href: '/pools'
  },
  {
    title: 'Governance',
    description: 'Vote on platform updates, change & rules',
    info: '3. Claim ZBD Rewards',
    buttonText: 'Claim',
    href: '/pools'
  }
]

const MainframeSection: React.FC = () => {

  return (
    <MainWrapper>
      <ImageSection>
        <div>
          <img src={MainframeTokenIcon} alt='' />
        </div>
        <h2>Mainframe Staking</h2>
      </ImageSection>
      <CardsSection>
        {cardsData.map(card => <CardMainframe {...card}/>)}
      </CardsSection>
    </MainWrapper>
  )
}

export default MainframeSection
