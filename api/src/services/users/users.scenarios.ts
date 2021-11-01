import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        updatedAt: '2021-11-01T02:16:23Z',
        email: 'String1923321',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2021-11-01T02:16:23Z',
        email: 'String2939934',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
