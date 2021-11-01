import type { FindTeamById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TeamProfile from 'src/components/Team/TeamProfile/TeamProfile'
import LoadingSpinner from 'src/components/LoadingSpinner/LoadingSpinner'

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
      players {
        id
        name
      }
    }
  }
`

export const Loading = () => (
  <div className="flex flex-col items-center justify-center">
    <LoadingSpinner />
  </div>
)

export const Empty = () => <div>Team not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ team }: CellSuccessProps<FindTeamById>) => {
  return <TeamProfile team={team} />
}
