import styled from 'styled-components'
import React, { FC } from 'react'
import LogoHeader from '../../../../assets/mainframe/zbdo_logo.svg'

const StyledLogo = styled.img`
  height: 32px;
  display: block;
  ${({ theme }) => theme.mediaQueries.nav} {
    height: 40px;
  }
`

const LogoMainframe: FC = () => {
  return (
    <StyledLogo src={LogoHeader} alt='' />
  )
}
export default LogoMainframe