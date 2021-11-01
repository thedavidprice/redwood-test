import { NavLink, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const Navbar = () => {
  const { isAuthenticated } = useAuth()

  return (
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
  )
}

export default Navbar
