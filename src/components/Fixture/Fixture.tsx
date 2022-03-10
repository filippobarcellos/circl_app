import { useNavigation } from '@react-navigation/native'

import { Text } from '../Text'
import { GameResume } from '@components/GameResume'
import { TelevisedLabel } from '@components/TelevisedLabel'

import { Game, Status } from '@models/Game'

import * as S from './styles'

type FixtureProps = {
  info: Game
}

function getStatusFromGame(
  status: Status,
  time: string,
  count: string
): string {
  switch (status) {
    case 'done':
      return 'FIN'
    case 'live':
      return count
    default:
      return time
  }
}

function getWinner(homeScore: number, awayScore: number) {
  if (homeScore === awayScore) {
    return 'even'
  }

  return homeScore > awayScore ? 'homeTeam' : 'awayTeam'
}

export function Fixture({ info }: FixtureProps) {
  const { navigate } = useNavigation()

  const homeTeam = info.homeTeam
  const awayTeam = info.awayTeam
  const isTelevised = info.televised
  const status = getStatusFromGame(info.status, info.time, info.count)
  const winnerTeam = getWinner(homeTeam.score, awayTeam.score)

  function navigateToFixtureDetails() {
    return navigate('FixtureDetails')
  }

  return (
    <S.Container onPress={navigateToFixtureDetails}>
      <S.Team>
        <S.Row>
          <GameResume info={homeTeam} winner={winnerTeam === 'homeTeam'} />
          <Text
            variant='paragraph-b2-bold'
            color='gray'
            style={{ marginBottom: 16 }}
          >
            {status}
          </Text>

          <GameResume
            info={awayTeam}
            isAway
            winner={winnerTeam === 'awayTeam'}
          />
        </S.Row>
      </S.Team>
      {isTelevised && <TelevisedLabel color='normal' />}
    </S.Container>
  )
}
