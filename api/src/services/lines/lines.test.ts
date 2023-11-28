import type { line } from '@prisma/client'

import { lines, line, createLine, updateLine, deleteLine } from './lines'
import type { StandardScenario } from './lines.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('lines', () => {
  scenario('returns all lines', async (scenario: StandardScenario) => {
    const result = await lines()

    expect(result.length).toEqual(Object.keys(scenario.line).length)
  })

  scenario('returns a single line', async (scenario: StandardScenario) => {
    const result = await line({ id: scenario.line.one.id })

    expect(result).toEqual(scenario.line.one)
  })

  scenario('creates a line', async (scenario: StandardScenario) => {
    const result = await createLine({
      input: { geometry: 'String', layerId: scenario.line.two.layerId },
    })

    expect(result.geometry).toEqual('String')
    expect(result.layerId).toEqual(scenario.line.two.layerId)
  })

  scenario('updates a line', async (scenario: StandardScenario) => {
    const original = (await line({ id: scenario.line.one.id })) as line
    const result = await updateLine({
      id: original.id,
      input: { geometry: 'String2' },
    })

    expect(result.geometry).toEqual('String2')
  })

  scenario('deletes a line', async (scenario: StandardScenario) => {
    const original = (await deleteLine({ id: scenario.line.one.id })) as line
    const result = await line({ id: original.id })

    expect(result).toEqual(null)
  })
})
