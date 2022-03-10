import * as S from './styles'

type TeamColorProps = {
  reverseDir: boolean
  team: string
}

export function TeamColor({ reverseDir, team }: TeamColorProps) {
  const isNew = team === 'new'
  return (
    <S.Container reverseDir={reverseDir}>
      {isNew ? (
        <>
          <S.Left team={team} />
          <S.Right team={team} />
        </>
      ) : (
        <S.Single team={team} />
      )}
    </S.Container>
  )
}
