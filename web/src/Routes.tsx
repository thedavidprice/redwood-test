import { Router, Route, Set, Private } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <Set wrap={MainLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />

        <Private unauthenticated="login">
          <Route path="/players/{slug}" page={PlayerProfilePage} name="playerProfile" />
          <Route path="/teams/{slug}" page={TeamProfilePage} name="teamProfile" />
          <Route path="/players" page={PlayersPage} name="players" />
          <Route path="/teams" page={TeamsPage} name="teams" />
        </Private>
      </Set>
    </Router>
  )
}

export default Routes
