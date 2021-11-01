import {
  players,
  player,
  createPlayer,
  updatePlayer,
  deletePlayer,
} from './players'
import type { StandardScenario } from './players.scenarios'

describe('players', () => {
  scenario('returns all players', async (scenario: StandardScenario) => {
    const result = await players()

    expect(result.length).toEqual(Object.keys(scenario.player).length)
  })

  scenario('returns a single player', async (scenario: StandardScenario) => {
    const result = await player({ id: scenario.player.one.id })

    expect(result).toEqual(scenario.player.one)
  })

  scenario('creates a player', async () => {
    const result = await createPlayer({
      input: {
        updatedAt: '2021-11-01T02:15:58Z',
        name: 'String',
        handle: 'String3645558',
        slug: 'String6761093',
        height: 'String',
        weight: 'String',
      },
    })

    expect(result.updatedAt).toEqual('2021-11-01T02:15:58Z')
    expect(result.name).toEqual('String')
    expect(result.handle).toEqual('String3645558')
    expect(result.slug).toEqual('String6761093')
    expect(result.height).toEqual('String')
    expect(result.weight).toEqual('String')
  })

  scenario('updates a player', async (scenario: StandardScenario) => {
    const original = await player({ id: scenario.player.one.id })
    const result = await updatePlayer({
      id: original.id,
      input: { updatedAt: '2021-11-02T02:15:58Z' },
    })

    expect(result.updatedAt).toEqual('2021-11-02T02:15:58Z')
  })

  scenario('deletes a player', async (scenario: StandardScenario) => {
    const original = await deletePlayer({ id: scenario.player.one.id })
    const result = await player({ id: original.id })

    expect(result).toEqual(null)
  })
})
