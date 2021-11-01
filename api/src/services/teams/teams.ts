import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const teams = () => {
  return db.team.findMany()
}

export const team = ({ id }: Prisma.TeamWhereUniqueInput) => {
  return db.team.findUnique({
    where: { id },
  })
}

interface CreateTeamArgs {
  input: Prisma.TeamCreateInput
}

export const createTeam = ({ input }: CreateTeamArgs) => {
  return db.team.create({
    data: input,
  })
}

interface UpdateTeamArgs extends Prisma.TeamWhereUniqueInput {
  input: Prisma.TeamUpdateInput
}

export const updateTeam = ({ id, input }: UpdateTeamArgs) => {
  return db.team.update({
    data: input,
    where: { id },
  })
}

export const deleteTeam = ({ id }: Prisma.TeamWhereUniqueInput) => {
  return db.team.delete({
    where: { id },
  })
}

export const Team = {
  players: (_obj, { root }: ResolverArgs<ReturnType<typeof team>>) =>
    db.team.findUnique({ where: { id: root.id } }).players(),
  coaches: (_obj, { root }: ResolverArgs<ReturnType<typeof team>>) =>
    db.team.findUnique({ where: { id: root.id } }).coaches(),
  colorScheme: (_obj, { root }: ResolverArgs<ReturnType<typeof team>>) =>
    db.team.findUnique({ where: { id: root.id } }).colorScheme(),
}
