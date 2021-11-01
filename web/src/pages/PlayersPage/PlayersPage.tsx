import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PlayersPage = () => {
  return (
    <>
      <MetaTags
        title="Players"
        // description="Players description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>PlayersPage</h1>
      <p>
        Find me in <code>./web/src/pages/PlayersPage/PlayersPage.tsx</code>
      </p>
      <p>
        My default route is named <code>players</code>, link to me with `
        <Link to={routes.players()}>Players</Link>`
      </p>
    </>
  )
}

export default PlayersPage
