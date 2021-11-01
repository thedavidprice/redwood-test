import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { navigate } from '@redwoodjs/router'

const HomePage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto border-gray-200 dark:border-gray-700 pb-16">
        <section className="flex flex-col-reverse sm:flex-row items-start">
          <hgroup className="flex flex-col items-center">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Redwood.js Demo
            </h1>
            <h2 className="text-xl text-gray-700 dark:text-gray-200 mb-12">
              Made with TailwindCSS
            </h2>
          </hgroup>
        </section>
        <section className="py-2 text-center space-y-8">
          {isAuthenticated ? (
            <p>Current user: {currentUser.email}</p>
          ) : (
            <p>Sign in to view team and player data</p>
          )}
          <button
            className="p-2 mx-auto my-2 w-32 rounded-md bg-gray-200 hover:bg-gray-400"
            onClick={async () => {
              if (isAuthenticated) {
                await logOut()
                navigate('/')
              } else {
                navigate('/login')
              }
            }}
          >
            {isAuthenticated ? 'Log out' : 'Log in'}
          </button>
        </section>
      </div>
    </>
  )
}

export default HomePage
