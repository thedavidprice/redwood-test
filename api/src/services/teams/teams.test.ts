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
        updatedAt: '2021-11-01T11:57:36Z',
        name: 'String3002514',
        handle: 'String3393046',
        slug: 'String2763302',
        city: 'String',
        abbreviation: 'String6204258',
        conference: 'String',
        division: 'String',
        established: 'String',
      },
    })

    expect(result.updatedAt).toEqual('2021-11-01T11:57:36Z')
    expect(result.name).toEqual('String3002514')
    expect(result.handle).toEqual('String3393046')
    expect(result.slug).toEqual('String2763302')
    expect(result.city).toEqual('String')
    expect(result.abbreviation).toEqual('String6204258')
    expect(result.conference).toEqual('String')
    expect(result.division).toEqual('String')
    expect(result.established).toEqual('String')
  })

  scenario('updates a team', async (scenario: StandardScenario) => {
    const original = await team({ id: scenario.team.one.id })
    const result = await updateTeam({
      id: original.id,
      input: { updatedAt: '2021-11-02T11:57:36Z' },
    })

    expect(result.updatedAt).toEqual('2021-11-02T11:57:36Z')
  })

  scenario('deletes a team', async (scenario: StandardScenario) => {
    const original = await deleteTeam({ id: scenario.team.one.id })
    const result = await team({ id: original.id })

    expect(result).toEqual(null)
  })
})
