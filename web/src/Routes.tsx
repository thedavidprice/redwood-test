import { Router, Route, Set, Private } from '@redwoodjs/router'

import TeamsLayout from 'src/layouts/TeamsLayout'
import PlayersLayout from 'src/layouts/PlayersLayout'
import MainLayout from 'src/layouts/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="login">
        <Set wrap={TeamsLayout}>
          <Route path="/teams/{id}" page={TeamTeamPage} name="team" />
          <Route path="/teams" page={TeamTeamsPage} name="teams" />
        </Set>
        <Set wrap={PlayersLayout}>
          <Route path="/players/{id}" page={PlayerPlayerPage} name="player" />
          <Route path="/players" page={PlayerPlayersPage} name="players" />
        </Set>
      </Private>

      <Set wrap={MainLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
