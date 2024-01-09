import type { Polygon } from '@prisma/client'

import {
  polygons,
  polygon,
  createPolygon,
  updatePolygon,
  deletePolygon,
} from './polygons'
import type { StandardScenario } from './polygons.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('polygons', () => {
  scenario('returns all polygons', async (scenario: StandardScenario) => {
    const result = await polygons()

    expect(result.length).toEqual(Object.keys(scenario.polygon).length)
  })

  scenario('returns a single polygon', async (scenario: StandardScenario) => {
    const result = await polygon({ id: scenario.polygon.one.id })

    expect(result).toEqual(scenario.polygon.one)
  })

  scenario('deletes a polygon', async (scenario: StandardScenario) => {
    const original = (await deletePolygon({
      id: scenario.polygon.one.id,
    })) as Polygon
    const result = await polygon({ id: original.id })

    expect(result).toEqual(null)
  })
})
