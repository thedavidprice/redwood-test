import EditTeamCell from 'src/components/Team/EditTeamCell'

type TeamPageProps = {
  id: string
}

const EditTeamPage = ({ id }: TeamPageProps) => {
  return <EditTeamCell id={id} />
}

export default EditTeamPage
