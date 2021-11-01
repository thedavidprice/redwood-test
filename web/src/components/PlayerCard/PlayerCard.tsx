import { motion } from 'framer-motion'

import { useCloudinaryImage } from 'src/hooks/useCloudinaryImage'

type PlayerCardProps = {
  player: any
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  const { imageURL: playerSrc } = useCloudinaryImage(
    `nba/players/${player.handle}`
  )
  const { imageURL: teamLogo } = useCloudinaryImage(
    `nba/teams/${player.team.handle}`
  )

  return (
    <motion.article
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col justify-end bg-white dark:bg-gray-900 shadow-2xl w-80 h-48 relative"
    >
      <img
        src={teamLogo}
        alt="Team logo"
        className="opacity-10 -translate-x-4 object-cover absolute w-full h-full"
      />
      <div className="pt-2">
        <div className="flex items-end justify-evenly mx-4">
          <img
            src={playerSrc}
            alt="Player headshot"
            className="object-cover w-32 h-32 relative"
          />
          <div className="ml-2">
            <p className="text-sm md:text-md font-medium w-full text-gray-500 dark:text-gray-400 tracking-tight">
              #{player.number} | {player.position}
            </p>
            <p className="text-md md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
              {player.name}
            </p>
          </div>
          <div className="self-start">
            {teamLogo && (
              <img
                src={teamLogo}
                alt="Team logo"
                width={50}
                height={50}
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-3 divide-x-2 divide-black text-gray-800 dark:text-gray-200 border-t-4"
        style={{ borderTopColor: 'gray.500' }}
      >
        <div className="text-center py-1">
          <p className="text-xs font-bold uppercase">Height</p>
          <p className="text-xs">{player.height ?? '---'}</p>
        </div>
        <div className="text-center py-1">
          <p className="text-xs font-bold uppercase">Weight</p>
          <p className="text-xs">{player.weight ?? '---'}</p>
        </div>
        <div className="text-center py-1">
          <p className="text-xs font-bold uppercase">Position</p>
          <p className="text-xs">{player.position ?? '---'}</p>
        </div>
      </div>
    </motion.article>
  )
}

export default PlayerCard
