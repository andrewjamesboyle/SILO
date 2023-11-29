import type { Prisma, Layer } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LayerCreateArgs>({
  layer: {
    one: {
      data: {
        name: 'String',
        type: 'String',
        project: {
          create: {
            name: 'String',
            createdBy: {
              create: {
                auth0Id: 'String5434883',
                email: 'String2519818',
                role: { create: { name: 'String' } },
              },
            },
            organization: { create: { name: 'String' } },
          },
        },
        createdBy: {
          create: {
            auth0Id: 'String9434236',
            email: 'String775043',
            role: { create: { name: 'String' } },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        type: 'String',
        project: {
          create: {
            name: 'String',
            createdBy: {
              create: {
                auth0Id: 'String4122542',
                email: 'String4072349',
                role: { create: { name: 'String' } },
              },
            },
            organization: { create: { name: 'String' } },
          },
        },
        createdBy: {
          create: {
            auth0Id: 'String5175527',
            email: 'String5127101',
            role: { create: { name: 'String' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Layer, 'layer'>
