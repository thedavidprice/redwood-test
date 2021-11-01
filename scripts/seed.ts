import task from 'tasuku'

import { db } from '$api/src/lib/db'

import coaches from '$api/db/data/backups/documents/coaches.json'
import players from '$api/db/data/backups/documents/players.json'
import colorSchemes from '$api/db/data/team-colors.json'
import teams from '$api/db/data/backups/documents/teams.json'

export const seedCoachData = async () => {
  for (const coach of coaches) {
    await db.coach.create({
      data: {
        handle: coach.handle,
        name: coach.name,
        type: coach.type,
        isAssistant: coach.isAssistant,
      },
    })
  }
}

export const seedPlayerData = async () => {
  for (const player of players) {
    await db.player.create({
      data: {
        handle: player.handle,
        name: player.name,
        slug: player.slug,
        height: player.height,
        weight: player.weight,
        number: player.number,
        position: player.position,
      },
    })
  }
}

export const seedTeamData = async () => {
  for (const team of teams) {
    const playerIds = players
      .filter((player) => player.teamId === team.handle)
      .map((player) => ({ handle: player.id }))

    const coachIds = coaches
      .filter((coach) => coach.teamId === team.handle)
      .map((coach) => ({ handle: coach.id }))

    const colors = colorSchemes.find((scheme) => scheme.handle === team.handle)
    const colorScheme = await db.colorScheme.findUnique({
      where: {
        ColorScheme_primary_secondary_key: {
          primary: colors?.primary as string,
          secondary: colors?.secondary as string,
        },
      },
    })

    await db.team.create({
      data: {
        handle: team.handle,
        name: team.name,
        slug: team.slug,
        city: team.city,
        established: team.established,
        abbreviation: team.abbreviation,
        wins: team.wins,
        losses: team.losses,
        winPercentage: team.winPercentage,
        conference: team.conference,
        division: team.division,
        players: {
          connect: playerIds,
        },
        coaches: {
          connect: coachIds,
        },
        colorScheme: {
          connect: { id: colorScheme?.id },
        },
      },
    })
  }
}

export const seedColorSchemesData = async () => {
  await db.colorScheme.createMany({
    data: colorSchemes.map((colorScheme) => ({
      primary: colorScheme.primary,
      secondary: colorScheme.secondary,
    })),
    skipDuplicates: true,
  })
}

// Manually seed via `yarn rw prisma db seed`
// Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
export default async () => {
  try {
    const runSeedTasks = async () => {
      await task('Seed tasks', async ({ task }) => {
        await task.group((task) => [
          task('Seeding players', async () => await seedPlayerData()),
          task('Seeding coaches', async () => await seedCoachData()),
          task(
            'Seeding color schemes',
            async () => await seedColorSchemesData()
          ),
          task('Seeding teams', async () => await seedTeamData()),
        ])
      })
    }

    await runSeedTasks()
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
