import type { point } from '@prisma/client'

import { points, point, createPoint, updatePoint, deletePoint } from './points'
import type { StandardScenario } from './points.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('points', () => {
  scenario('returns all points', async (scenario: StandardScenario) => {
    const result = await points()

    expect(result.length).toEqual(Object.keys(scenario.point).length)
  })

  scenario('returns a single point', async (scenario: StandardScenario) => {
    const result = await point({ id: scenario.point.one.id })

    expect(result).toEqual(scenario.point.one)
  })

  scenario('creates a point', async (scenario: StandardScenario) => {
    const result = await createPoint({
      input: { geometry: 'String', layerId: scenario.point.two.layerId },
    })

    expect(result.geometry).toEqual('String')
    expect(result.layerId).toEqual(scenario.point.two.layerId)
  })

  scenario('updates a point', async (scenario: StandardScenario) => {
    const original = (await point({ id: scenario.point.one.id })) as point
    const result = await updatePoint({
      id: original.id,
      input: { geometry: 'String2' },
    })

    expect(result.geometry).toEqual('String2')
  })

  scenario('deletes a point', async (scenario: StandardScenario) => {
    const original = (await deletePoint({ id: scenario.point.one.id })) as point
    const result = await point({ id: original.id })

    expect(result).toEqual(null)
  })
})
