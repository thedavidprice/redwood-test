import { coaches } from './coaches'
import type { StandardScenario } from './coaches.scenarios'

describe('coaches', () => {
  scenario('returns all coaches', async (scenario: StandardScenario) => {
    const result = await coaches()

    expect(result.length).toEqual(Object.keys(scenario.coach).length)
  })
})
