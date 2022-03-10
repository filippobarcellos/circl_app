import styled, { css } from 'styled-components/native'

type ContainerProps = {
  winner: boolean
}

export const Container = styled.View<ContainerProps>`
  ${({ theme, winner }) => css`
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: ${theme.colors.shades[120]};
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: ${winner ? theme.colors.green[100] : 'transparent'};
  `}
`
