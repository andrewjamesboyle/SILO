import type { Prisma, polygon } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.polygonCreateArgs>({
  polygon: {
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
                    auth0Id: 'String9712586',
                    email: 'String1020355',
                    role: { create: { name: 'String' } },
                  },
                },
                organization: { create: { name: 'String' } },
              },
            },
            createdBy: {
              create: {
                auth0Id: 'String4797083',
                email: 'String7520338',
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
                    auth0Id: 'String105767',
                    email: 'String8936944',
                    role: { create: { name: 'String' } },
                  },
                },
                organization: { create: { name: 'String' } },
              },
            },
            createdBy: {
              create: {
                auth0Id: 'String979784',
                email: 'String7407624',
                role: { create: { name: 'String' } },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<polygon, 'polygon'>
