import type { Layer } from '@prisma/client'

import { layers, layer, createLayer, updateLayer, deleteLayer } from './layers'
import type { StandardScenario } from './layers.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('layers', () => {
  scenario('returns all layers', async (scenario: StandardScenario) => {
    const result = await layers()

    expect(result.length).toEqual(Object.keys(scenario.layer).length)
  })

  scenario('returns a single layer', async (scenario: StandardScenario) => {
    const result = await layer({ id: scenario.layer.one.id })

    expect(result).toEqual(scenario.layer.one)
  })

  scenario('creates a layer', async (scenario: StandardScenario) => {
    const result = await createLayer({
      input: {
        name: 'String',
        projectId: scenario.layer.two.projectId,
        type: 'String',
        createdById: scenario.layer.two.createdById,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.projectId).toEqual(scenario.layer.two.projectId)
    expect(result.type).toEqual('String')
    expect(result.createdById).toEqual(scenario.layer.two.createdById)
  })

  scenario('updates a layer', async (scenario: StandardScenario) => {
    const original = (await layer({ id: scenario.layer.one.id })) as Layer
    const result = await updateLayer({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a layer', async (scenario: StandardScenario) => {
    const original = (await deleteLayer({ id: scenario.layer.one.id })) as Layer
    const result = await layer({ id: original.id })

    expect(result).toEqual(null)
  })
})
