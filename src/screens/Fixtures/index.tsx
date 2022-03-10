import { SectionList, FlatList } from 'react-native'

import { Text } from '@components/Text'
import { Fixture } from '@components/Fixture'
import { GameCard } from '@components/GameCard'
import { Accordion } from '@components/Accordion'
import { FeaturedCard } from '@components/FeaturedCard'

import useMatches from '@store/matches'

import * as S from './styles'

export default function Fixtures() {
  const todayMatches = useMatches((state) => state.todayMatches)
  const pastMatches = useMatches((state) => state.pastMatches)
  const liveMatches = useMatches((state) => state.liveMatches)

  return (
    <S.Wrapper>
      <S.Container>
        <Accordion title='Fixtures'>
          <FlatList
            data={liveMatches}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) =>
              item.id === 'promotion' ? (
                <FeaturedCard />
              ) : (
                <GameCard info={item as any} />
              )
            }
          />
        </Accordion>
        <S.Content>
          <FlatList
            data={pastMatches}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{ marginBottom: 20 }}
            renderItem={({ item }) => <Fixture info={item as any} />}
          />
          <SectionList
            sections={todayMatches}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Fixture info={item as any} />}
            renderSectionHeader={({ section: { title } }) => (
              <S.Header>
                <Text variant='title-h3'>{title}</Text>
                <Text color='gray'>Today</Text>
              </S.Header>
            )}
          />
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}
