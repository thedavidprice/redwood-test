import type { FindPlayerById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PlayerProfile from 'src/components/Player/PlayerProfile'
import LoadingSpinner from 'src/components/LoadingSpinner/LoadingSpinner'

export const QUERY = gql`
  query FindPlayerById($id: String!) {
    player: player(id: $id) {
      id
      createdAt
      updatedAt
      name
      handle
      slug
      height
      weight
      number
      position
      team {
        id
        name
        city
      }
    }
  }
`

export const Loading = () => (
  <div className="flex flex-col items-center justify-center">
    <LoadingSpinner />
  </div>
)

export const Empty = () => <div>Player not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ player }: CellSuccessProps<FindPlayerById>) => {
  return <PlayerProfile player={player} />
}
