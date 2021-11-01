import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

type PlayerProfilePageProps = {
  slug: string
}

const PlayerProfilePage = ({ slug }: PlayerProfilePageProps) => {
  return (
    <>
      <MetaTags
        title="PlayerProfile"
        // description="PlayerProfile description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>PlayerProfilePage</h1>
      <p>
        Find me in <code>./web/src/pages/PlayerProfilePage/PlayerProfilePage.tsx</code>
      </p>
      <p>
        My default route is named <code>playerProfile</code>, link to me with `
        <Link to={routes.playerProfile({ slug: '42' })}>PlayerProfile 42</Link>`
      </p>
      <p>The parameter passed to me is {slug}</p>
    </>
  )
}

export default PlayerProfilePage
