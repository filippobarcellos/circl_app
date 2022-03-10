import styled, { css } from 'styled-components/native'
import { TelevisedLabelProps } from './TelevisedLabel'

export const Container = styled.View<TelevisedLabelProps>`
  ${({ theme, color }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.shades[color === 'dark' ? 140 : 120]};
    padding: 8px 12px;
    border-bottom-left-radius: ${theme.borderRadius.regular};
    border-bottom-right-radius: ${theme.borderRadius.regular};
  `}
`
