import styled, { css } from 'styled-components/native'

type TeamColor = {
  team?: string
}

type ContainerProps = {
  reverseDir: boolean
}

export const Container = styled.View<ContainerProps>`
  ${({ reverseDir, theme }) => css`
    width: 40px;
    height: 3px;
    margin-left: ${reverseDir ? 'auto' : 0};
    flex-direction: row;
  `}
`

export const Single = styled.View<TeamColor>`
  ${({ team, theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.teams[team][2]};
  `}
`

export const Left = styled.View<TeamColor>`
  ${({ theme, team }) => css`
    width: 20px;
    height: 100%;
    background-color: ${theme.colors.teams[team][1]};
  `}
`

export const Right = styled.View<TeamColor>`
  ${({ theme, team }) => css`
    width: 20px;
    height: 100%;
    background-color: ${theme.colors.teams[team][2]};
  `}
`
