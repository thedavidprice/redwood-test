import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CoachCreateArgs>({
  coach: {
    one: {
      data: {
        updatedAt: '2021-11-01T12:51:32Z',
        name: 'String',
        handle: 'String1775673',
        type: 'String',
        isAssistant: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2021-11-01T12:51:32Z',
        name: 'String',
        handle: 'String9498115',
        type: 'String',
        isAssistant: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
