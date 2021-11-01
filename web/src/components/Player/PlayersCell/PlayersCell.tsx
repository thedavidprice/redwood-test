import type { PlayersQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import PlayerCard from 'src/components/Player/PlayerCard/PlayerCard'
import IntersectionSlide from 'src/components/IntersectionSlide/IntersectionSlide'
import LoadingSpinner from 'src/components/LoadingSpinner/LoadingSpinner'

export const QUERY = gql`
  query PlayersQuery {
    players {
      id
      name
      slug
      height
      weight
      handle
      position
      number
      team {
        id
        handle
        name
        colorScheme {
          primary
          secondary
        }
      }
    }
  }
`

export const Loading = () => (
  <div className="flex flex-col items-center justify-center">
    <LoadingSpinner />
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ players }: CellSuccessProps<PlayersQuery>) => {
  return (
    <ul className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
      {players?.map(
        (player) =>
          player.team && (
            <li key={player.handle}>
              <IntersectionSlide>
                <Link to={routes.player({ id: player.id })}>
                  <PlayerCard player={player} />
                </Link>
              </IntersectionSlide>
            </li>
          )
      )}
    </ul>
  )
}
