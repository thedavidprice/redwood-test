import { colorSchemes } from './colorSchemes'
import type { StandardScenario } from './colorSchemes.scenarios'

describe('colorSchemes', () => {
  scenario('returns all colorSchemes', async (scenario: StandardScenario) => {
    const result = await colorSchemes()

    expect(result.length).toEqual(Object.keys(scenario.colorScheme).length)
  })
})
