import { motion } from 'framer-motion'

import { useCloudinaryImage } from 'src/hooks/useCloudinaryImage'

type TeamCardProps = {
  team: any
}

const TeamCard = ({ team }: TeamCardProps) => {
  const { imageURL: logo } = useCloudinaryImage(`nba/teams/${team.handle}`)

  return (
    <motion.article
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center justify-between bg-white dark:bg-gray-900 shadow-2xl w-64 h-64 py-4 rounded-lg"
    >
      <div className="pt-2">
        <img src={logo} alt="Team logo" className="object-cover w-48 h-48" />
      </div>
      <div className="ml-2">
        <p className="text-lg md:text-xl font-medium w-full text-gray-500 dark:text-gray-400 tracking-tight">
          {team.city} {team.name}
        </p>
      </div>
    </motion.article>
  )
}

export default TeamCard
