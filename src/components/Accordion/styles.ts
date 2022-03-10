import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    background-color: ${theme.colors.shades[120]};
  `}
`

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 24px;
`

export const Children = styled.View`
  padding: 10px 24px 24px 24px;
`
