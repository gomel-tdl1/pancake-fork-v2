import React from 'react'
import { SvgProps } from '../../../components/Svg'
import Svg from '../../../components/Svg/Svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
      <defs>
        <clipPath id="clip-Custom_Size_1">
          <rect width="30" height="30"/>
        </clipPath>
      </defs>
      <g id="Custom_Size_1" data-name="Custom Size – 1" clipPath="url(#clip-Custom_Size_1)">
        <g id="noun_Lightning_Bolt_380964" data-name="noun_Lightning Bolt_380964" transform="translate(-120.6 -68.5)">
          <path id="Path_1395" data-name="Path 1395" d="M130.8,68.5h13.5l-9,12h10.5l-19.5,18,9-15H124.8Z" fill="#afa3cc"/>
        </g>
      </g>
    </Svg>

  )
}

export default Icon