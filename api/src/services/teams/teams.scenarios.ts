import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TeamCreateArgs>({
  team: {
    one: {
      data: {
        updatedAt: '2021-11-01T11:57:36Z',
        name: 'String3150896',
        handle: 'String9453543',
        slug: 'String9695459',
        city: 'String',
        abbreviation: 'String9742064',
        conference: 'String',
        division: 'String',
        established: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2021-11-01T11:57:36Z',
        name: 'String1145476',
        handle: 'String5721403',
        slug: 'String9374721',
        city: 'String',
        abbreviation: 'String973274',
        conference: 'String',
        division: 'String',
        established: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
