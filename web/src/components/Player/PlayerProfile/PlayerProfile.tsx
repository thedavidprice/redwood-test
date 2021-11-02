import type { FindPlayerById } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useCloudinaryImage } from 'src/hooks/useCloudinaryImage'

type PlayerProfileProps = {
  player: FindPlayerById['player']
}

const PlayerProfile = ({ player }: PlayerProfileProps) => {
  const { imageURL: headshot } = useCloudinaryImage(
    `nba/players/${player.handle}`
  )

  return (
    <div className="flex flex-col items-center px-8 py-8 bg-gray-200 dark:bg-800 shadow-2xl space-y-8 w-144">
      <hgroup className="space-y-4 my-8 text-center">
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
          className="object-cover w-96 h-96"
        />
      </div>
      <Link
        to={routes.team({ id: player.team.id })}
        className="text-lg font-semibold tracking-tight hover:font-bold"
      >
        {player.team.city} {player.team.name}
      </Link>
      <p>
        {player.height} / {player.weight} lbs
      </p>
    </div>
  )
}

export default PlayerProfile
