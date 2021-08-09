import React from 'react'
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem, LinkExternal, Flex, Svg, Image, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import helpLogo from '../../assets/mainframe/zbdo_logo_token.svg'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: space-between;
    flex-direction: row;
  }
`

const BubbleWrapper = styled(Flex)`
  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
    transition: background-color 0.2s, opacity 0.2s;
  }
  &:hover {
    svg {
      opacity: 0.65;
    }
  }
  &:active {
    svg {
      opacity: 0.85;
    }
  }
`
const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 250px;
  width: 250px;
  margin-right: -16px;
  
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-right: -24px;
  }

`
const StyledHelpImage = styled.img`
  position: absolute;
  right: -70px;
  bottom: -60px;
  width: 240px;
  height: 240px;
`
const Footer = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Flex flexDirection={['column', 'column', 'row']} alignItems="center">
        <LinkExternal
          href="https://www.binance.org/en/bridge?utm_source=PancakeSwap"
          ml={[0, 0, '40px']}
          mt={['20px', '20px', 0]}
          mb={['8px', '8px', 0]}
        >
          {t('Convert ERC-20 to BEP-20')}
        </LinkExternal>
      </Flex>
      <Flex
        flexGrow={1}
        alignItems="center"
        width={['100%', '100%', '100%', 'auto']}
        justifyContent={['center', 'center', 'center', 'flex-end']}
      >
        <BubbleWrapper style={{marginTop: '80px', marginRight: '-50px'}}>
          <Button
            id="clickExchangeHelp"
            as="a"
            external
            href="https://docs.pancakeswap.finance/products/pancakeswap-exchange"
            variant="subtle"
          >
            {t('Need help ?')}
          </Button>
          <Svg viewBox="0 0 16 16">
            <path d="M0 16V0C0 0 3 1 6 1C9 1 16 -2 16 3.5C16 10.5 7.5 16 0 16Z" />
          </Svg>
        </BubbleWrapper>
        <ImageWrapper>
          <StyledHelpImage src={helpLogo} alt="Get some help"/>
        </ImageWrapper>
      </Flex>
    </Wrapper>
  )
}

export default Footer
