import styled, { css } from 'styled-components/native'
import { TextProps } from './Text'

export const Text = styled.Text<TextProps>`
  ${({ color, size, family, theme, uppercase }) => css`
    font-family: ${theme.fonts.family.primary[family!]};
    font-size: ${theme.fonts.sizes[size!]};
    text-transform: ${uppercase ? 'uppercase' : 'none'};
    color: ${color === 'gray'
      ? theme.colors[color!][100]
      : theme.colors[color!]};
  `}
`
