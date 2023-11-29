import type { Prisma, line } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.lineCreateArgs>({
  line: {
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
                    auth0Id: 'String8167862',
                    email: 'String249269',
                    role: { create: { name: 'String' } },
                  },
                },
                organization: { create: { name: 'String' } },
              },
            },
            createdBy: {
              create: {
                auth0Id: 'String3529858',
                email: 'String7506815',
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
                    auth0Id: 'String449245',
                    email: 'String3408794',
                    role: { create: { name: 'String' } },
                  },
                },
                organization: { create: { name: 'String' } },
              },
            },
            createdBy: {
              create: {
                auth0Id: 'String5033675',
                email: 'String7432766',
                role: { create: { name: 'String' } },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<line, 'line'>
