import type { Prisma, point } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.pointCreateArgs>({
  point: {
    one: {
      data: {
        geometry: 'String',
        layer: {
          create: {
            name: 'String',
            type: 'String',
            project: {
              create: {
                name: 'String',
                createdBy: {
                  create: {
                    auth0Id: 'String8775653',
                    email: 'String576063',
                    role: { create: { name: 'String' } },
                  },
                },
                organization: { create: { name: 'String' } },
              },
            },
            createdBy: {
              create: {
                auth0Id: 'String287198',
                email: 'String27661',
                role: { create: { name: 'String' } },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        geometry: 'String',
        layer: {
          create: {
            name: 'String',
            type: 'String',
            project: {
              create: {
                name: 'String',
                createdBy: {
                  create: {
                    auth0Id: 'String5311477',
                    email: 'String6915620',
                    role: { create: { name: 'String' } },
                  },
                },
                organization: { create: { name: 'String' } },
              },
            },
            createdBy: {
              create: {
                auth0Id: 'String6156952',
                email: 'String1989946',
                role: { create: { name: 'String' } },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<point, 'point'>
