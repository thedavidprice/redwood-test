import type { FindTeamById } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { useCloudinaryImage } from 'src/hooks/useCloudinaryImage'

type TeamProfileProps = {
  team: FindTeamById['team']
}

const TeamProfile = ({ team }: TeamProfileProps) => {
  const { imageURL: logo } = useCloudinaryImage(`nba/teams/${team.handle}`)

  return (
    <div className="px-8 py-4 bg-gray-200 dark:bg-800 text-center shadow-2xl space-y-8 my-16">
      <hgroup className="space-y-4 my-8">
        <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
          {team.city} {team.name}
        </h1>
        <h2 className="text-xl md:text-2xl w-full text-gray-500 dark:text-gray-400 font-semibold tracking-tight">
          {team.wins} - {team.losses}
        </h2>
      </hgroup>
      <div className="pt-2">
        <img src={logo} alt="Team logo" className="object-cover w-80 h-80" />
      </div>
      <h3 className="text-xl font-semibold tracking-tight">Roster</h3>
      <ul className="space-y-2">
        {team.players?.map((player) => (
          <li key={player.id}>
            <Link
              to={routes.player({ id: player.id })}
              className="text-md hover:font-bold"
            >
              {player.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TeamProfile
