import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PlayerCreateArgs>({
  player: {
    one: {
      data: {
        updatedAt: '2021-11-01T02:15:58Z',
        name: 'String',
        handle: 'String1728237',
        slug: 'String1940334',
        height: 'String',
        weight: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2021-11-01T02:15:58Z',
        name: 'String',
        handle: 'String4584030',
        slug: 'String296243',
        height: 'String',
        weight: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
