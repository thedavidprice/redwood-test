import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserRoleCreateArgs>({
  userRole: {
    one: { data: { updatedAt: '2021-11-01T02:23:56Z', role: 'ADMIN' } },
    two: { data: { updatedAt: '2021-11-01T02:23:56Z', role: 'ADMIN' } },
  },
})

export type StandardScenario = typeof standard
