import { useNavigation } from '@react-navigation/native'

import { Text } from '../Text'
import { Score } from '../Score'
import { TelevisedLabel } from '@components/TelevisedLabel'

import { Game } from '@models/Game'
import background from '../../assets/background.png'

import * as S from './styles'

type GameProps = {
  info: Game
}

export function GameCard({ info }: GameProps) {
  const { navigate } = useNavigation()

  const homeTeam = info.homeTeam
  const awayTeam = info.awayTeam

  function navigateToFixtureDetails() {
    return navigate('FixtureDetails')
  }

  return (
    <S.Container onPress={navigateToFixtureDetails}>
      <S.Background
        source={background}
        resizeMode='cover'
        imageStyle={{ borderRadius: 8 }}
      >
        <S.Content>
          <S.Group>
            <S.ScoreContainer>
              <Score score={homeTeam.score} />
            </S.ScoreContainer>
            <Text variant='title-h3' uppercase>
              {homeTeam.short_name}
            </Text>
          </S.Group>

          <S.Time>
            <Text variant='paragraph-b2-bold'>{info.count}'</Text>
          </S.Time>

          <S.Group>
            <S.ScoreContainer>
              <Score score={awayTeam.score} />
            </S.ScoreContainer>
            <Text variant='title-h3' uppercase>
              {awayTeam.short_name}
            </Text>
          </S.Group>
        </S.Content>
        <TelevisedLabel />
      </S.Background>
    </S.Container>
  )
}
