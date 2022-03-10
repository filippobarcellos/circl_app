import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 10px;
    background-color: ${theme.colors.shades[130]};
    margin-bottom: 16px;
    flex: 1;
  `}
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 16px 16px 12px 16px;
`

export const Team = styled.View`
  flex: 1;
`
