import { teams, team, createTeam, updateTeam, deleteTeam } from './teams'
import type { StandardScenario } from './teams.scenarios'

describe('teams', () => {
  scenario('returns all teams', async (scenario: StandardScenario) => {
    const result = await teams()

    expect(result.length).toEqual(Object.keys(scenario.team).length)
  })

  scenario('returns a single team', async (scenario: StandardScenario) => {
    const result = await team({ id: scenario.team.one.id })

    expect(result).toEqual(scenario.team.one)
  })

  scenario('creates a team', async () => {
    const result = await createTeam({
      input: {
        updatedAt: '2021-11-01T02:15:50Z',
        name: 'String4171659',
        handle: 'String3344083',
        slug: 'String2847066',
        city: 'String',
        abbreviation: 'String5448674',
        conference: 'String',
        division: 'String',
        established: 'String',
      },
    })

    expect(result.updatedAt).toEqual('2021-11-01T02:15:50Z')
    expect(result.name).toEqual('String4171659')
    expect(result.handle).toEqual('String3344083')
    expect(result.slug).toEqual('String2847066')
    expect(result.city).toEqual('String')
    expect(result.abbreviation).toEqual('String5448674')
    expect(result.conference).toEqual('String')
    expect(result.division).toEqual('String')
    expect(result.established).toEqual('String')
  })

  scenario('updates a team', async (scenario: StandardScenario) => {
    const original = await team({ id: scenario.team.one.id })
    const result = await updateTeam({
      id: original.id,
      input: { updatedAt: '2021-11-02T02:15:50Z' },
    })

    expect(result.updatedAt).toEqual('2021-11-02T02:15:50Z')
  })

  scenario('deletes a team', async (scenario: StandardScenario) => {
    const original = await deleteTeam({ id: scenario.team.one.id })
    const result = await team({ id: original.id })

    expect(result).toEqual(null)
  })
})
