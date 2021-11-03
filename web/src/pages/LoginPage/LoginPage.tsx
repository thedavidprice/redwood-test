import { Auth, Typography, Button } from '@supabase/ui'
import { createClient } from '@supabase/supabase-js'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { supabaseClient } from 'src/lib/supabase'

const Container = (props) => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    )
  return props.children
}

const LoginPage = () => {
  return (
    <>
      <MetaTags
        title="Login"
        // description="Login description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <Auth.UserContextProvider supabaseClient={supabaseClient}>
        <Container supabaseClient={supabaseClient}>
          <Auth supabaseClient={supabaseClient} />
        </Container>
      </Auth.UserContextProvider>
    </>
  )
}

export default LoginPage
