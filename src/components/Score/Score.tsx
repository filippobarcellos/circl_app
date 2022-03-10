import { Text } from '../Text'

import * as S from './styles'

type ScoreProps = {
  score: number
  winner?: boolean
}

export function Score({ score, winner = false }: ScoreProps) {
  return (
    <S.Container winner={winner}>
      <Text variant='title-h3'>{score}</Text>
    </S.Container>
  )
}
