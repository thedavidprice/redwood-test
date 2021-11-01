import type { Player } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useCloudinaryImage } from 'src/hooks/useCloudinaryImage'

type PlayerProfileProps = {
  player: Player
}

const PlayerProfile = ({ player }: PlayerProfileProps) => {
  const { imageURL: headshot } = useCloudinaryImage(
    `nba/players/${player.handle}`
  )

  return (
    <div className="px-8 py-4 bg-gray-200 dark:bg-800 text-center shadow-2xl space-y-8">
      <hgroup className="space-y-4 my-8">
        <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
          {player.name}
        </h1>
        <h2 className="text-xl md:text-2xl w-full text-gray-500 dark:text-gray-400 font-semibold tracking-tight">
          #{player.number} | {player.position}
        </h2>
      </hgroup>
      <div className="pt-2">
        <img
          src={headshot}
          alt="Player headshot"
          className="object-cover w-80 h-80"
        />
      </div>
      <div>
        <Link
          to={routes.team({ id: player.team.id })}
          className="text-lg font-semibold tracking-tight hover:font-bold"
        >
          {player.team.city} {player.team.name}
        </Link>
      </div>
    </div>
  )
}

export default PlayerProfile
