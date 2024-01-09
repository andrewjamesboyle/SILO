import type { Prisma, Line } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LineCreateArgs>({
  line: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = ScenarioData<Line, 'line'>
