import type { Prisma, Layer } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LayerCreateArgs>({
  layer: {
    one: {
      data: {
        name: 'String',
        createdBy: { create: { auth0Id: 'String434291' } },
        organization: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        name: 'String',
        createdBy: { create: { auth0Id: 'String29734' } },
        organization: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Layer, 'layer'>
