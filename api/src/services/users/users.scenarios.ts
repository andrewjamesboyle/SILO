import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { auth0Id: 'String416567' } },
    two: { data: { auth0Id: 'String2492829' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
