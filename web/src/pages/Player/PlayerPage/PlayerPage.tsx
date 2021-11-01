import PlayerCell from 'src/components/Player/PlayerCell'

type PlayerPageProps = {
  id: String
}

const PlayerPage = ({ id }: PlayerPageProps) => {
  return <PlayerCell id={id} />
}

export default PlayerPage
