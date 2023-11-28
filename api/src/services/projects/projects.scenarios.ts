import type { Prisma, Project } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProjectCreateArgs>({
  project: {
    one: {
      data: {
        name: 'String',
        createdBy: {
          create: {
            auth0Id: 'String7456026',
            email: 'String3626942',
            role: { create: { name: 'String' } },
          },
        },
        organization: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        name: 'String',
        createdBy: {
          create: {
            auth0Id: 'String959586',
            email: 'String7115939',
            role: { create: { name: 'String' } },
          },
        },
        organization: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Project, 'project'>
