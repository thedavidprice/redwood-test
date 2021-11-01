import { AnimatePresence, motion } from 'framer-motion'
import { NavLink, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuthenticated } = useAuth()

  return (
    <div className="flex flex-col items-center min-h-screen w-screen">
      <header className="flex justify-between flex-wrap text-white bg-black dark:text-black dark:bg-white p-6 w-full">
        <nav className="flex justify-center space-x-4 py-4">
          {isAuthenticated ? (
            <>
              <NavLink
                to={routes.teams()}
                className="text-gray-200 dark:bg-gray-800"
                activeClassName="text-white dark:text-black"
              >
                Teams
              </NavLink>
              <NavLink
                to={routes.players()}
                className="text-gray-200 dark:bg-gray-800"
                activeClassName="text-white dark:text-black"
              >
                Players
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to={routes.home()}
                className="text-gray-200 dark:bg-gray-800"
                activeClassName="text-white dark:text-black"
              >
                Home
              </NavLink>
              <NavLink
                to={routes.about()}
                className="text-gray-200 dark:bg-gray-800"
                activeClassName="text-white dark:text-black"
              >
                About
              </NavLink>
            </>
          )}
        </nav>
      </header>

      <AnimatePresence>
        <motion.main
          key="main"
          className="flex flex-col flex-grow items-center justify-center text-black bg-white dark:text-white dark:bg-black"
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

export default MainLayout
