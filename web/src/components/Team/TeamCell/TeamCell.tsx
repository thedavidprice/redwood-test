import type { FindTeamById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Team from 'src/components/Team/Team'

export const QUERY = gql`
  query FindTeamById($id: String!) {
    team: team(id: $id) {
      createdAt
      updatedAt
      id
      name
      handle
      slug
      city
      abbreviation
      conference
      division
      established
      wins
      losses
      winPercentage
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Team not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ team }: CellSuccessProps<FindTeamById>) => {
  return <Team team={team} />
}
