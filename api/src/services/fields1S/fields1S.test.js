import {
  fields1S,
  fields1,
  createFields1,
  updateFields1,
  deleteFields1,
} from './fields1S'

describe('fields1S', () => {
  scenario('returns all fields1S', async (scenario) => {
    const result = await fields1S()

    expect(result.length).toEqual(Object.keys(scenario.fields1).length)
  })

  scenario('returns a single fields1', async (scenario) => {
    const result = await fields1({ id: scenario.fields1.one.id })

    expect(result).toEqual(scenario.fields1.one)
  })

  scenario('creates a fields1', async (scenario) => {
    const result = await createFields1({
      input: { field1: 'String', fields1Id: scenario.fields1.two.fields1Id },
    })

    expect(result.field1).toEqual('String')
    expect(result.fields1Id).toEqual(scenario.fields1.two.fields1Id)
  })

  scenario('updates a fields1', async (scenario) => {
    const original = await fields1({ id: scenario.fields1.one.id })
    const result = await updateFields1({
      id: original.id,
      input: { field1: 'String2' },
    })

    expect(result.field1).toEqual('String2')
  })

  scenario('deletes a fields1', async (scenario) => {
    const original = await deleteFields1({ id: scenario.fields1.one.id })
    const result = await fields1({ id: original.id })

    expect(result).toEqual(null)
  })
})
