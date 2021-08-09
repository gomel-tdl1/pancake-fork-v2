import styled from 'styled-components'
import { HandleProps, InputProps, PancakeToggleProps, ScaleKeys, scales } from './types'

const scaleKeyValues = {
  sm: {
    pancakeSize: '16px', // The size of a pancake (the handle)
    travelDistance: '16px', // How far pancakes should travel horizontally
    toggleHeight: '20px', // General Height and
    toggleWidth: '36px', // Width of a toggle box
    pancakeThickness: '1px', // Bottom shadow of a pancake
    pancakeTwoOffset: '0px', // Pancakes don't look good when they are concentric
    pancakeThreeOffset: '-3px', // so pancake 2 and 3 are shifted a little bit
    butterTop: '3px', // Fine adjustments for butter position
    butterLeft: '10px',
    butterWidth: '6px', // Widht and
    butterHeight: '5px', // Height of a butter block on top of pancakes
    butterThickness: '0.5px', // Shadow on the bottom of the butter block
    butterRadius: '2px', // Rounded corners for the butter
    butterSmearOneTop: '10px', // There is melted butter
    butterSmearOneLeft: '2.5px', // next to the butter block
    butterSmearTwoTop: '11px', // implemented with :before and :after
    butterSmearTwoRight: '2.5px', // these values adjust the position of it
  },
  md: {
    pancakeSize: '32px',
    travelDistance: '34px',
    toggleHeight: '40px',
    toggleWidth: '72px',
    pancakeThickness: '2px',
    pancakeTwoOffset: '-3px',
    pancakeThreeOffset: '-8px',
    butterTop: '3px',
    butterLeft: '16px',
    butterWidth: '12px',
    butterHeight: '11px',
    butterThickness: '1px',
    butterRadius: '4px',
    butterSmearOneTop: '20px',
    butterSmearOneLeft: '5px',
    butterSmearTwoTop: '22px',
    butterSmearTwoRight: '5px',
  },
}

const getScale =
  (property: ScaleKeys) =>
    ({ scale = scales.MD }: PancakeToggleProps) => {
      return scaleKeyValues[scale][property]
    }

export const PancakeStack = styled.div<HandleProps>`
  position: relative;
  display: inline-block;

  &:label:before {
    content: none;
  }

  .pancakes {
    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .pancake {
    background: ${({ theme }) => theme.pancakeToggle.handleBackground};
    border-radius: 50%;
    width: ${getScale('pancakeSize')};
    height: ${getScale('pancakeSize')};
    position: absolute;
    transition: 0.4s ease;
    top: 2px;
    left: 4px;
    box-shadow: 0 ${getScale('pancakeThickness')} 0 ${getScale('pancakeThickness')} ${({ theme }) => theme.pancakeToggle.handleShadow};
  }

  .pancake:nth-child(1) {
    background: ${({ theme }) => theme.pancakeToggle.handleBackground};
    box-shadow: 0 ${getScale('pancakeThickness')} 0 ${getScale('pancakeThickness')} ${({ theme }) => theme.pancakeToggle.handleShadow};
  }
`

export const PancakeInput = styled.input<InputProps>`
  height: 40px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 40px;

  &:focus + label {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:checked + label .pancakes {
    transform: translateX(${getScale('travelDistance')});
  }

  &:checked + label .pancake:nth-child(1) {
    background: ${({ theme }) => theme.colors.pancakeBG};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondary};
    transform: scale(1.3  );
    transition-delay: 0.2s;
  }
`

export const PancakeLabel = styled.label<PancakeToggleProps>`
  width: ${getScale('toggleWidth')};
  height: ${getScale('toggleHeight')};
  background: ${({ theme, checked }) => theme.colors[checked ? 'success' : 'input']};
  box-shadow: ${({ theme }) => theme.shadows.inset};
  display: inline-block;
  border-radius: 50px;
  position: relative;
  transition: all 0.3s ease;
  transform-origin: 20% center;
  cursor: pointer;
`
