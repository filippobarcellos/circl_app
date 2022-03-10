import { Text } from '../Text'
import { Score } from '../Score'

import { Team } from '@models/Team'

import * as S from './styles'
import { TeamColor } from '@components/TeamColor'

type GameInfoProps = {
  isAway?: boolean
  info: Team
  winner: boolean
}

export function GameResume({ info, isAway = false, winner }: GameInfoProps) {
  return (
    <S.Container>
      <S.Group>
        <S.TeamRow reverseDir={isAway}>
          <S.Group>
            <Text variant='title-h3' uppercase>
              {info.short_name}
            </Text>
            <TeamColor reverseDir={isAway} team={info.short_name} />
          </S.Group>
          <S.TeamScore reverseDir={isAway}>
            <Score score={info.score} winner={winner} />
          </S.TeamScore>
        </S.TeamRow>
        <Text variant='paragraph-b2'>{info.name}</Text>
      </S.Group>
    </S.Container>
  )
}
