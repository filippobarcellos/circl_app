import { Feather } from '@expo/vector-icons'

import { Text } from '../Text'

import * as S from './styles'
import theme from '@styles/theme'

export function FeaturedCard() {
  return (
    <S.Container>
      <S.Icon>
        <Feather name='gift' color={theme.colors.blue[100]} size={16} />
      </S.Icon>
      <Text variant='title-h3'>Give £5, get £5</Text>
      <Text variant='paragraph-b2' style={{ marginTop: 8 }}>
        Refer a friend you’ll both earn a £5 free bet!
      </Text>
    </S.Container>
  )
}
