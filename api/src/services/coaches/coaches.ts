import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const coaches = () => {
  return db.coach.findMany()
}

export const coach = ({ id }: Prisma.CoachWhereUniqueInput) => {
  return db.coach.findUnique({
    where: { id },
  })
}

export const Coach = {
  team: (_obj, { root }: ResolverArgs<ReturnType<typeof coach>>) =>
    db.coach.findUnique({ where: { id: root.id } }).team(),
}
