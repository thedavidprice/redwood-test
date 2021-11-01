import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Team/TeamsCell'

const DELETE_TEAM_MUTATION = gql`
  mutation DeleteTeamMutation($id: String!) {
    deleteTeam(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const TeamsList = ({ teams }) => {
  const [deleteTeam] = useMutation(DELETE_TEAM_MUTATION, {
    onCompleted: () => {
      toast.success('Team deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete team ' + id + '?')) {
      deleteTeam({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Id</th>
            <th>Name</th>
            <th>Handle</th>
            <th>Slug</th>
            <th>City</th>
            <th>Abbreviation</th>
            <th>Conference</th>
            <th>Division</th>
            <th>Established</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Win percentage</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{timeTag(team.createdAt)}</td>
              <td>{timeTag(team.updatedAt)}</td>
              <td>{truncate(team.id)}</td>
              <td>{truncate(team.name)}</td>
              <td>{truncate(team.handle)}</td>
              <td>{truncate(team.slug)}</td>
              <td>{truncate(team.city)}</td>
              <td>{truncate(team.abbreviation)}</td>
              <td>{truncate(team.conference)}</td>
              <td>{truncate(team.division)}</td>
              <td>{truncate(team.established)}</td>
              <td>{truncate(team.wins)}</td>
              <td>{truncate(team.losses)}</td>
              <td>{truncate(team.winPercentage)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.team({ id: team.id })}
                    title={'Show team ' + team.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTeam({ id: team.id })}
                    title={'Edit team ' + team.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete team ' + team.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(team.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TeamsList
