import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_TEAM_MUTATION = gql`
  mutation DeleteTeamMutation($id: String!) {
    deleteTeam(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Team = ({ team }) => {
  const [deleteTeam] = useMutation(DELETE_TEAM_MUTATION, {
    onCompleted: () => {
      toast.success('Team deleted')
      navigate(routes.teams())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete team ' + id + '?')) {
      deleteTeam({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Team {team.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Created at</th>
              <td>{timeTag(team.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(team.updatedAt)}</td>
            </tr><tr>
              <th>Id</th>
              <td>{team.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{team.name}</td>
            </tr><tr>
              <th>Handle</th>
              <td>{team.handle}</td>
            </tr><tr>
              <th>Slug</th>
              <td>{team.slug}</td>
            </tr><tr>
              <th>City</th>
              <td>{team.city}</td>
            </tr><tr>
              <th>Abbreviation</th>
              <td>{team.abbreviation}</td>
            </tr><tr>
              <th>Conference</th>
              <td>{team.conference}</td>
            </tr><tr>
              <th>Division</th>
              <td>{team.division}</td>
            </tr><tr>
              <th>Established</th>
              <td>{team.established}</td>
            </tr><tr>
              <th>Wins</th>
              <td>{team.wins}</td>
            </tr><tr>
              <th>Losses</th>
              <td>{team.losses}</td>
            </tr><tr>
              <th>Win percentage</th>
              <td>{team.winPercentage}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTeam({ id: team.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(team.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Team
