import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  ${({ theme }) => css`
    width: 240px;
    height: 148px;
    background-color: ${theme.colors.blue[100]};
    border-radius: 8px;
    margin-right: 16px;
    flex: 1;
  `}
`

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
`

export const Content = styled.View`
  width: 100%;
  padding: 24px 20px;
  flex-direction: row;
  justify-content: center;
  flex: 1;
`

export const ScoreContainer = styled.View`
  width: 40px;
  height: 40px;
  margin-bottom: 14px;
`
export const Group = styled.View``

export const Time = styled.View`
  ${({ theme }) => css`
    width: 36px;
    height: 23px;
    border-radius: 4px;
    background-color: ${theme.colors.green[100]};
    align-items: center;
    justify-content: center;
    margin: 8px 22px 0px 22px;
  `}
`
