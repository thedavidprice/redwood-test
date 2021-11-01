import type { FindPlayerById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Player from 'src/components/Player/Player'

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
      teamId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Player not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ player }: CellSuccessProps<FindPlayerById>) => {
  return <Player player={player} />
}
