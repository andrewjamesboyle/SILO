import type { Prisma, Polygon } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PolygonCreateArgs>({
  polygon: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = ScenarioData<Polygon, 'polygon'>
