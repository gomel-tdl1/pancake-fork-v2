import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_REDUCED } from '../../UiKit/widgets/Menu/config'
import { useMatchBreakpoints } from '../../UiKit'

const IframeWrapper = styled.div<{ isPushed: boolean }>`
  width: 100%;
  height: 800px;
  ${({ theme }) => theme.mediaQueries.nav} {
    height: 850px;
  }
  position: relative;
  overflow: hidden;

  .iframeClass {
    position: absolute;
    top: -64px;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  ${({ theme }) => theme.mediaQueries.nav} {
    .iframeClass {
      position: absolute;
      top: -64px;
      //left: ${({ isPushed }) => `-${isPushed ? SIDEBAR_WIDTH_FULL : (SIDEBAR_WIDTH_FULL + SIDEBAR_WIDTH_REDUCED)}px`};
      left: ${`-${SIDEBAR_WIDTH_FULL}px`};
      width: ${({ isPushed }) => `calc(100% + ${SIDEBAR_WIDTH_FULL}px)`};
      height: 100%;
    }
  }
`

type PancakeInfoPropsType ={
  isPushed: boolean
}

const PancakeInfo: FC<PancakeInfoPropsType> = ({isPushed}) => {
  return (
    <IframeWrapper isPushed={isPushed}>
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe src='https://pancakeswap.info/'
              className='iframeClass' />
    </IframeWrapper>
  )
}

export default PancakeInfo