import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const colorSchemes = () => {
  return db.colorScheme.findMany()
}

export const colorScheme = ({ id }: Prisma.ColorSchemeWhereUniqueInput) => {
  return db.colorScheme.findUnique({
    where: { id },
  })
}

export const ColorScheme = {
  team: (_obj, { root }: ResolverArgs<ReturnType<typeof colorScheme>>) =>
    db.colorScheme.findUnique({ where: { id: root.id } }).team(),
}
