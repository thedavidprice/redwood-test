import { MetaTags } from '@redwoodjs/web'

import PlayersCell from 'src/components/PlayersCell'

const PlayersPage = () => {
  return (
    <>
      <MetaTags
        title="Players"
        // description="Players description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1 className="text-black dark:text-white text-2xl my-8">Players</h1>
      <section>
        <PlayersCell />
      </section>
    </>
  )
}

export default PlayersPage
