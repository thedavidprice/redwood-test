import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TeamCreateArgs>({
  team: {
    one: {
      data: {
        updatedAt: '2021-11-01T02:15:50Z',
        name: 'String1950320',
        handle: 'String1308581',
        slug: 'String1148225',
        city: 'String',
        abbreviation: 'String1166149',
        conference: 'String',
        division: 'String',
        established: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2021-11-01T02:15:50Z',
        name: 'String4655978',
        handle: 'String4588683',
        slug: 'String8523197',
        city: 'String',
        abbreviation: 'String4528731',
        conference: 'String',
        division: 'String',
        established: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
