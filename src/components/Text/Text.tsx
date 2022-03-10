import React from 'react'
import { TextProps as RNTextProps } from 'react-native'

import {
  WeightProps,
  SizeProps,
  ColorProps,
  Variants,
  getVariantProps,
} from './types'

import * as S from './styles'

export type TextProps = RNTextProps & {
  children: React.ReactNode
  as?: React.ElementType
  family?: WeightProps
  size?: SizeProps
  color?: ColorProps
  variant?: Variants
  uppercase?: boolean
}

export function Text({
  children,
  variant = 'paragraph-b1',
  color = 'white',
  uppercase = false,
  ...atributtes
}: TextProps) {
  const variantProps = getVariantProps(variant)

  return (
    <S.Text
      color={color}
      uppercase={uppercase}
      {...variantProps}
      {...atributtes}
    >
      {children}
    </S.Text>
  )
}
