import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

type TeamProfilePageProps = {
  slug: string
}

const TeamProfilePage = ({ slug }: TeamProfilePageProps) => {
  return (
    <>
      <MetaTags
        title="TeamProfile"
        // description="TeamProfile description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>TeamProfilePage</h1>
      <p>
        Find me in <code>./web/src/pages/TeamProfilePage/TeamProfilePage.tsx</code>
      </p>
      <p>
        My default route is named <code>teamProfile</code>, link to me with `
        <Link to={routes.teamProfile({ slug: '42' })}>TeamProfile 42</Link>`
      </p>
      <p>The parameter passed to me is {slug}</p>
    </>
  )
}

export default TeamProfilePage
