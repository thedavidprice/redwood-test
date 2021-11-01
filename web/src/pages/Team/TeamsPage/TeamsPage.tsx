import { MetaTags } from '@redwoodjs/web'

import TeamsCell from 'src/components/TeamsCell'

const TeamsPage = () => {
  return (
    <>
      <MetaTags
        title="Teams"
        // description="Teams description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1 className="text-black dark:text-white text-2xl my-8">Teams</h1>
      <section>
        <TeamsCell />
      </section>
    </>
  )
}

export default TeamsPage
