import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.shades[140]};
`

export const GoBack = styled.TouchableOpacity`
  width: 80px;
  height: 40px;
`
