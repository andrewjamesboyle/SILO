import type { Prisma, Point } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PointCreateArgs>({
  point: {
    one: { data: { createdBy: { create: { auth0Id: 'String7381692' } } } },
    two: { data: { createdBy: { create: { auth0Id: 'String4227058' } } } },
  },
})

export type StandardScenario = ScenarioData<Point, 'point'>
