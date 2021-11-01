import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PLAYER_MUTATION = gql`
  mutation DeletePlayerMutation($id: String!) {
    deletePlayer(id: $id) {
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

const Player = ({ player }) => {
  const [deletePlayer] = useMutation(DELETE_PLAYER_MUTATION, {
    onCompleted: () => {
      toast.success('Player deleted')
      navigate(routes.players())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete player ' + id + '?')) {
      deletePlayer({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Player {player.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{player.id}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(player.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(player.updatedAt)}</td>
            </tr><tr>
              <th>Name</th>
              <td>{player.name}</td>
            </tr><tr>
              <th>Handle</th>
              <td>{player.handle}</td>
            </tr><tr>
              <th>Slug</th>
              <td>{player.slug}</td>
            </tr><tr>
              <th>Height</th>
              <td>{player.height}</td>
            </tr><tr>
              <th>Weight</th>
              <td>{player.weight}</td>
            </tr><tr>
              <th>Number</th>
              <td>{player.number}</td>
            </tr><tr>
              <th>Position</th>
              <td>{player.position}</td>
            </tr><tr>
              <th>Team id</th>
              <td>{player.teamId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPlayer({ id: player.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(player.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Player
