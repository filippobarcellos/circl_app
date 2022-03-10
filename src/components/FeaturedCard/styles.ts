import styled, { css } from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import theme from '@styles/theme'

export const Container = styled(LinearGradient).attrs({
  colors: [theme.colors.blue[100], theme.colors.blue[200]],
})`
  ${({ theme }) => css`
    max-width: 240px;
    height: 148px;
    padding: 16px;
    padding-right: 24px;
    background-color: ${theme.colors.blue[100]};
    border-radius: 8px;
    margin-right: 16px;
  `}
`
export const Icon = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
`
