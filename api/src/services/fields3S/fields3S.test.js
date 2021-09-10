import {
  fields3S,
  fields3,
  createFields3,
  updateFields3,
  deleteFields3,
} from './fields3S'

describe('fields3S', () => {
  scenario('returns all fields3S', async (scenario) => {
    const result = await fields3S()

    expect(result.length).toEqual(Object.keys(scenario.fields3).length)
  })

  scenario('returns a single fields3', async (scenario) => {
    const result = await fields3({ id: scenario.fields3.one.id })

    expect(result).toEqual(scenario.fields3.one)
  })

  scenario('creates a fields3', async (scenario) => {
    const result = await createFields3({
      input: { field1: 'String', fields3Id: scenario.fields3.two.fields3Id },
    })

    expect(result.field1).toEqual('String')
    expect(result.fields3Id).toEqual(scenario.fields3.two.fields3Id)
  })

  scenario('updates a fields3', async (scenario) => {
    const original = await fields3({ id: scenario.fields3.one.id })
    const result = await updateFields3({
      id: original.id,
      input: { field1: 'String2' },
    })

    expect(result.field1).toEqual('String2')
  })

  scenario('deletes a fields3', async (scenario) => {
    const original = await deleteFields3({ id: scenario.fields3.one.id })
    const result = await fields3({ id: original.id })

    expect(result).toEqual(null)
  })
})
