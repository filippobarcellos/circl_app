import create from 'zustand'
import { matches } from '@services/db.json'
import { todayString } from '@utils/date'

const localMatches = matches

const promotion = {
  id: 'promotion',
}

const useMatches = create((get, set) => ({
  pastMatches: localMatches.filter((m) => m.status === 'done'),
  liveMatches: [promotion, ...localMatches.filter((m) => m.status === 'live')],
  todayMatches: [
    {
      title: 'Premier League',
      data: localMatches.filter(
        (m) =>
          m.league === 'Premier League' &&
          m.date === todayString &&
          m.status !== 'live'
      ),
    },
    {
      title: 'FA Cup',
      data: localMatches.filter(
        (m) =>
          m.league === 'FA Cup' && m.date === todayString && m.status !== 'live'
      ),
    },
  ],
}))

export default useMatches
