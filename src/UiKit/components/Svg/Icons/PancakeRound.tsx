import React from "react";
import styled from 'styled-components'
import Logo from '../../../../assets/mainframe/zbdo_logo_token.svg'

const StyledLogo = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 8px;
  border-radius: 50%;
`
const Icon: React.FC = () => {
  return (
    <StyledLogo src={Logo} alt='' />
  );
};

export default Icon;
