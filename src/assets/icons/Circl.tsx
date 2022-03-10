import React from 'react'
import Svg, {
  Rect,
  SvgProps,
  Circle,
  G,
  Defs,
  ClipPath,
} from 'react-native-svg'

interface Props extends SvgProps {
  isFocused: boolean
}

export default function CirclIcon({ isFocused = false, ...attributes }: Props) {
  return (
    <Svg width='25' height='24' viewBox='0 0 25 24' fill='none' {...attributes}>
      <G clip-path='url(#clip0_152_611)'>
        <Circle
          cx='12.5'
          cy='12'
          r='11'
          stroke={isFocused ? 'white' : '#818190'}
          strokeWidth={2}
        />
        <Circle
          cx='12.5'
          cy='12'
          r='5'
          stroke={isFocused ? 'white' : '#818190'}
          strokeWidth={2}
        />
      </G>
      <Defs>
        <ClipPath id='clip0_152_611'>
          <Rect
            width='24'
            height='24'
            fill='white'
            transform='translate(0.5)'
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
