import { Team } from './Team'

enum Status {
  'planned',
  'done',
  'live',
}

type Game = {
  id: string
  status: Status
  count: string
  time: string
  televised: boolean
  homeTeam: Team
  awayTeam: Team
}

export { Game, Status }
