import { AnimatePresence, motion } from 'framer-motion'

import Navbar from 'src/components/Navbar/Navbar'

type PlayersLayout = {
  children?: React.ReactNode
}

const PlayersLayout = ({ children }: PlayersLayout) => {
  return (
    <div className="flex flex-col items-center min-h-screen w-screen">
      <Navbar />

      <AnimatePresence exitBeforeEnter>
        <motion.main
          key="main"
          className="flex flex-col flex-grow items-center justify-center my-32 mx-auto text-black bg-white dark:text-white dark:bg-black"
          animate="enter"
          exit="exit"
          initial="initial"
          variants={{
            initial: { opacity: 0, y: 5 },
            enter: { opacity: 1, y: 0, transition: { duration: 0.2 } },
            exit: { opacity: 0, transition: { duration: 0.1 } },
          }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default PlayersLayout
