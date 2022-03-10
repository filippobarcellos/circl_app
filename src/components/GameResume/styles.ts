import styled, { css } from 'styled-components/native'

type TeamProps = {
  reverseDir: boolean
}

export const Container = styled.View``

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Team = styled.View``

export const TeamRow = styled.View<TeamProps>`
  ${({ reverseDir }) => css`
    flex-direction: ${reverseDir ? 'row-reverse' : 'row'};
    align-items: center;
    margin-bottom: 4px;
  `}
`

export const Group = styled.View`
  justify-content: space-between;
`

export const TeamScore = styled.View<TeamProps>`
  ${({ theme, reverseDir }) => css`
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: ${theme.colors.shades[120]};
    align-items: center;
    justify-content: center;
    margin-left: ${reverseDir ? 0 : 24}px;
    margin-right: ${reverseDir ? 24 : 0}px;
  `}
`
