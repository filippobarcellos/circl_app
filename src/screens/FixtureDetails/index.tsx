import { useNavigation } from '@react-navigation/native'

import { Text } from '@components/Text'

import * as S from './styles'

export default function FixtureDetails() {
  const { goBack } = useNavigation()

  return (
    <S.Container>
      <Text variant='title-h1'>Fixture Details</Text>
      <S.GoBack onPress={goBack}>
        <Text>Go Back</Text>
      </S.GoBack>
    </S.Container>
  )
}
