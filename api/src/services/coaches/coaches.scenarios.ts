import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CoachCreateArgs>({
  coach: {
    one: {
      data: {
        updatedAt: '2021-11-01T02:16:10Z',
        name: 'String',
        handle: 'String5969635',
        type: 'String',
        isAssistant: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2021-11-01T02:16:10Z',
        name: 'String',
        handle: 'String701471',
        type: 'String',
        isAssistant: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
