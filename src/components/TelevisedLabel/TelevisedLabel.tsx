import { MaterialIcons } from '@expo/vector-icons'

import { Text } from '@components/Text'

import theme from '@styles/theme'

import * as S from './styles'

export type TelevisedLabelProps = {
  color?: 'dark' | 'normal'
}

export function TelevisedLabel({ color = 'dark' }: TelevisedLabelProps) {
  return (
    <S.Container color={color}>
      <Text uppercase variant='paragraph-b2-bold' color='gray'>
        Sky Sports
      </Text>
      <MaterialIcons name='tv' size={16} color={theme.colors.gray[100]} />
    </S.Container>
  )
}
