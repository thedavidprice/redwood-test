import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PlayerCreateArgs>({
  player: {
    one: {
      data: {
        updatedAt: '2021-11-01T11:57:32Z',
        name: 'String',
        handle: 'String4533543',
        slug: 'String4957828',
        height: 'String',
        weight: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2021-11-01T11:57:32Z',
        name: 'String',
        handle: 'String2289313',
        slug: 'String4942274',
        height: 'String',
        weight: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
