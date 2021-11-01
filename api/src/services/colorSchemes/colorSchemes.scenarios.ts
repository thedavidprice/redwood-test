import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ColorSchemeCreateArgs>({
  colorScheme: {
    one: {
      data: {
        updatedAt: '2021-11-01T02:16:44Z',
        primary: 'String',
        secondary: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2021-11-01T02:16:44Z',
        primary: 'String',
        secondary: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
