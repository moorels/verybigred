import {
  fields2S,
  fields2,
  createFields2,
  updateFields2,
  deleteFields2,
} from './fields2S'

describe('fields2S', () => {
  scenario('returns all fields2S', async (scenario) => {
    const result = await fields2S()

    expect(result.length).toEqual(Object.keys(scenario.fields2).length)
  })

  scenario('returns a single fields2', async (scenario) => {
    const result = await fields2({ id: scenario.fields2.one.id })

    expect(result).toEqual(scenario.fields2.one)
  })

  scenario('creates a fields2', async (scenario) => {
    const result = await createFields2({
      input: { field1: 'String', fields2Id: scenario.fields2.two.fields2Id },
    })

    expect(result.field1).toEqual('String')
    expect(result.fields2Id).toEqual(scenario.fields2.two.fields2Id)
  })

  scenario('updates a fields2', async (scenario) => {
    const original = await fields2({ id: scenario.fields2.one.id })
    const result = await updateFields2({
      id: original.id,
      input: { field1: 'String2' },
    })

    expect(result.field1).toEqual('String2')
  })

  scenario('deletes a fields2', async (scenario) => {
    const original = await deleteFields2({ id: scenario.fields2.one.id })
    const result = await fields2({ id: original.id })

    expect(result).toEqual(null)
  })
})
