import TeamCell from 'src/components/Team/TeamCell'

type TeamPageProps = {
  id: string
}

const TeamPage = ({ id }: TeamPageProps) => {
  return <TeamCell id={id} />
}

export default TeamPage
