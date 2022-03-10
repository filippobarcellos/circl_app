import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shades[120]};
`
export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shades[140]};
  flex: 1;
`
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 16px;
  flex: 1;
`
